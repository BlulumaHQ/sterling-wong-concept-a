/** Infrastructure aliases are public but must not be search-indexed. */
const HOSTING_SUFFIXES = [
  ".lovable.app",
  ".workers.dev",
  ".pages.dev",
  ".netlify.app",
] as const;

export function isHostingAlias(hostname: string): boolean {
  const normalized = hostname.toLowerCase().replace(/\.$/, "");
  return HOSTING_SUFFIXES.some((suffix) => normalized.endsWith(suffix));
}

/** Never overwrite existing robots restrictions or modify the HTML body. */
export function applyIndexingPolicy(request: Request, response: Response): Response {
  const hostname = new URL(request.url).hostname;
  const contentType = response.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
  if (!isHostingAlias(hostname) || (contentType !== "text/html" && contentType !== "application/xhtml+xml")) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.append("X-Robots-Tag", "noindex");
  // A downstream cache must not reuse an alias's HTML policy for a custom host.
  const vary = headers.get("vary");
  if (!vary?.split(",").some((value) => ["host", "*"].includes(value.trim().toLowerCase()))) {
    headers.set("Vary", vary ? `${vary}, Host` : "Host");
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}