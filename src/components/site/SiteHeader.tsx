import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import swLogo from "@/assets/sterling/sw-logo.png";
import { useI18n } from "@/lib/i18n";

const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/listings", labelKey: "nav.listings" },
  { to: "/buying", labelKey: "nav.buying" },
  { to: "/selling", labelKey: "nav.selling" },
  { to: "/communities", labelKey: "nav.communities" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/contact", labelKey: "nav.contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { lang, setLang, t } = useI18n();

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.28em] ${className}`}>
      <button
        onClick={() => setLang("en")}
        className={`px-1.5 py-0.5 transition ${lang === "en" ? "text-gold" : "text-ivory/55 hover:text-ivory"}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-ivory/25">/</span>
      <button
        onClick={() => setLang("zh")}
        className={`px-1.5 py-0.5 transition ${lang === "zh" ? "text-gold" : "text-ivory/55 hover:text-ivory"}`}
        aria-label="切換至廣東話"
      >
        繁
      </button>
    </div>
  );

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
            <span>{t("header.regions")}</span>
            <span className="text-ivory/20">|</span>
            <LangSwitch />
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
              {t("header.book")}
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link to="/" className="flex items-center" aria-label="Sterling Wong">
          <img
            src={swLogo}
            alt="Sterling Wong — Personal Real Estate Corporation"
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
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
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch className="text-ivory/80" />
          <button
            onClick={() => setOpen(!open)}
            className="border border-ivory/30 p-2 text-ivory"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
                {t(item.labelKey)}
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
              {t("header.book")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
