import { applyIndexingPolicy } from "../../src/lib/indexing-policy.ts";

// Inline declaration leaves existing build, redirects and functions untouched.
// Do not opt into edge response caching: this policy is evaluated per request.
export const config = { path: "/*" };

export default async function hostnameIndexing(
  request: Request,
  context: { next: () => Promise<Response> },
): Promise<Response> {
  return applyIndexingPolicy(request, await context.next());
}