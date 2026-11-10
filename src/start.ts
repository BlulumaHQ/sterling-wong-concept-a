import { createMiddleware, createStart } from "@tanstack/react-start";
import { applyIndexingPolicy } from "./lib/indexing-policy";

const hostnameIndexing = createMiddleware().server(async ({ request, next }) => {
  const result = await next();
  return { ...result, response: applyIndexingPolicy(request, result.response) };
});

export const startInstance = createStart(() => ({
  requestMiddleware: [hostnameIndexing],
}));