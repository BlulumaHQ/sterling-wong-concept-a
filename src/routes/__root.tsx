import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sterling Wong PREC | Vancouver Real Estate Specialist" },
      {
        name: "description",
        content:
          "Sterling Wong, Personal Real Estate Corporation with Oakwyn Realty. Buy and sell homes in Vancouver, Burnaby, Richmond and the Lower Mainland with trusted, bilingual service.",
      },
      { property: "og:title", content: "Sterling Wong PREC | Vancouver Real Estate Specialist" },
      {
        property: "og:description",
        content:
          "Trusted Vancouver REALTOR® helping clients buy and sell homes across Metro Vancouver. Personalized, bilingual service in English and Cantonese.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sterling Wong PREC | Vancouver Real Estate Specialist" },
      { name: "description", content: "Sterling's Ascent is a premium, conversion-focused real estate website designed to increase lead generation and enhance professional branding." },
      { property: "og:description", content: "Sterling's Ascent is a premium, conversion-focused real estate website designed to increase lead generation and enhance professional branding." },
      { name: "twitter:description", content: "Sterling's Ascent is a premium, conversion-focused real estate website designed to increase lead generation and enhance professional branding." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/44464569-6052-49be-8243-b928f20f7bc7/id-preview-c8d52791--677c9a8e-e246-4296-8717-3dde46a38417.lovable.app-1777425911018.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/44464569-6052-49be-8243-b928f20f7bc7/id-preview-c8d52791--677c9a8e-e246-4296-8717-3dde46a38417.lovable.app-1777425911018.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
