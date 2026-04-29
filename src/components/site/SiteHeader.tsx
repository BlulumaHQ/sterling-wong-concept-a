import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import oakwyn from "@/assets/sterling/oakwyn-logo.png";

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
        transparent
          ? "bg-transparent"
          : "bg-charcoal/95 backdrop-blur border-b border-ivory/10"
      }`}
    >
      {/* TOP UTILITY BAR */}
      <div
        className={`hidden border-b transition-colors duration-500 lg:block ${
          transparent ? "border-ivory/15 bg-charcoal/40 backdrop-blur" : "border-ivory/10 bg-[oklch(0.10_0.005_60)]"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2.5 md:px-10">
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.32em] text-ivory/55">
            <span>Vancouver · Burnaby · Richmond</span>
            <span className="text-ivory/20">|</span>
            <span>English / 廣東話</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@sterlingwong.ca"
              className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-ivory/70 hover:text-gold xl:inline-flex"
            >
              <Mail className="h-3 w-3" />
              info@sterlingwong.ca
            </a>
            <a
              href="tel:+16048360506"
              className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory hover:text-gold"
            >
              <Phone className="h-3 w-3 text-gold" />
              +1 (604) 836-0506
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gold px-5 py-2 text-[10px] font-medium uppercase tracking-[0.32em] text-charcoal transition hover:bg-ivory"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link to="/" className="flex items-center gap-4">
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base tracking-[0.3em] text-ivory uppercase md:text-lg">
              Sterling Wong
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold">
              Personal Real Estate Corp.
            </span>
          </span>
          <span className="hidden h-10 w-px bg-ivory/20 md:block" />
          <img
            src={oakwyn}
            alt="Oakwyn Realty"
            className="hidden h-10 w-auto object-contain opacity-90 md:block"
          />
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
