import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/buying", label: "Buying" },
  { to: "/selling", label: "Selling" },
  { to: "/communities", label: "Communities" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:py-5">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-wide text-charcoal sm:text-2xl">
            STERLING WONG
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
            Personal Real Estate Corporation
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16048360506"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-charcoal hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5" />
            +1 (604) 836-0506
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-charcoal px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-sm border border-border p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+16048360506"
              className="mt-4 flex items-center justify-center gap-2 rounded-sm border border-charcoal px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-charcoal"
            >
              <Phone className="h-4 w-4" /> +1 (604) 836-0506
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-charcoal px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
