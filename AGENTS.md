# Architecture rules

- Keep hostname indexing in the shared response policy, used by TanStack request middleware and Netlify edge middleware; static HTML cannot safely vary indexing by hostname.
- Determine indexing from the actual request URL, not forwarded headers; client-supplied host claims must not deindex custom domains.
- Keep Netlify edge middleware declared inline without changing the static build or SPA fallback; this preserves the existing deployment and function chain.
- Treat managed-host middleware enforcement as unverified until public root and nested HTML responses are checked after deployment; platform/static responses can bypass application middleware.