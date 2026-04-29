import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
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
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur border-b border-ivory/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-base tracking-[0.28em] text-ivory uppercase">
            Sterling Wong
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold">
            Personal Real Estate Corp.
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[10px] font-medium uppercase tracking-[0.32em] text-ivory/75 transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+16048360506"
            className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/80 hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5" />
            604.836.0506
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-ivory/40 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.32em] text-ivory transition hover:border-gold hover:bg-gold hover:text-charcoal"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="border border-ivory/30 p-2 text-ivory lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ivory/10 bg-charcoal lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/10 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+16048360506"
              className="mt-4 flex items-center justify-center gap-2 border border-ivory/30 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory"
            >
              <Phone className="h-4 w-4" /> 604.836.0506
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.32em] text-charcoal"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
