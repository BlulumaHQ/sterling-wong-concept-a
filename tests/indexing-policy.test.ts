import { describe, expect, test } from "bun:test";
import { applyIndexingPolicy, isHostingAlias } from "../src/lib/indexing-policy";
import netlifyIndexing, { config } from "../netlify/edge-functions/hostname-indexing";

describe("hostname-specific indexing", () => {
  for (const suffix of ["lovable.app", "workers.dev", "pages.dev", "netlify.app"]) {
    test(`${suffix} root and nested HTML receive noindex without redirects`, async () => {
      for (const path of ["/", "/contact", "/nested/page", "/missing"]) {
        const request = new Request(`https://project.${suffix}${path}`);
        const response = applyIndexingPolicy(request, new Response("original HTML", {
          status: path === "/missing" ? 404 : 200,
          headers: { "Content-Type": "text/html; charset=utf-8", "Vary": "Accept-Encoding" },
        }));
        expect(response.headers.get("X-Robots-Tag")).toBe("noindex");
        expect(response.status).toBe(path === "/missing" ? 404 : 200);
        expect(response.headers.get("Location")).toBeNull();
        expect(response.headers.get("Vary")).toBe("Accept-Encoding, Host");
        expect(await response.text()).toBe("original HTML");
      }
    });
  }

  test("custom domains are unchanged, including intentional page-level restrictions", () => {
    for (const host of ["example.com", "www.example.com", "future.example.org", "lovable.app.example.com", "notlovable.app", "localhost"]) {
      for (const existing of [null, "noindex, nofollow"]) {
        const headers = new Headers({ "Content-Type": "text/html" });
        if (existing) headers.set("X-Robots-Tag", existing);
        const original = new Response("custom HTML", { headers });
        const result = applyIndexingPolicy(new Request(`https://${host}/contact`), original);
        expect(result).toBe(original);
        expect(result.headers.get("X-Robots-Tag")).toBe(existing);
      }
    }
  });

  test("aliases retain existing robots and other response headers", () => {
    const response = applyIndexingPolicy(new Request("https://project.netlify.app/"), new Response("HTML", {
      headers: { "Content-Type": "text/html", "X-Robots-Tag": "googlebot: nofollow", "Link": '</contact>; rel="canonical"', "Set-Cookie": "test=value; Secure" },
    }));
    expect(response.headers.get("X-Robots-Tag")).toBe("googlebot: nofollow, noindex");
    expect(response.headers.get("Link")).toBe('</contact>; rel="canonical"');
    expect(response.headers.get("Set-Cookie")).toBe("test=value; Secure");
  });

  test("non-HTML assets and function responses remain untouched", () => {
    for (const type of ["application/json", "text/css", "text/javascript", "application/xml", "text/plain"]) {
      const original = new Response("content", { headers: { "Content-Type": type } });
      expect(applyIndexingPolicy(new Request("https://project.workers.dev/api/action"), original)).toBe(original);
    }
  });

  test("normalizes case and trailing DNS dot with strict suffix boundaries", () => {
    expect(isHostingAlias("DRAFT.PROJECT.NETLIFY.APP.")).toBe(true);
    expect(isHostingAlias("project.pages.dev.example.com")).toBe(false);
    expect(isHostingAlias("pages.dev")).toBe(false);
  });

  test("forwarded host cannot cause custom-domain noindex", () => {
    const original = new Response("HTML", { headers: { "Content-Type": "text/html" } });
    const request = new Request("https://example.com/", { headers: { "X-Forwarded-Host": "project.lovable.app" } });
    expect(applyIndexingPolicy(request, original)).toBe(original);
  });

  test("Netlify passes nested HTML through its request chain", async () => {
    expect(config.path).toBe("/*");
    let calls = 0;
    const result = await netlifyIndexing(new Request("https://project.netlify.app/contact"), {
      next: async () => { calls++; return new Response("page", { headers: { "Content-Type": "text/html" } }); },
    });
    expect(calls).toBe(1);
    expect(result.headers.get("X-Robots-Tag")).toBe("noindex");
    expect(await result.text()).toBe("page");
  });
});