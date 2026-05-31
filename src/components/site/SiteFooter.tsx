import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import swLogo from "@/assets/sterling/sw-logo.png";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <img
            src={swLogo}
            alt="Sterling Wong — Personal Real Estate Corporation"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{t("footer.explore")}</p>
          <ul className="mt-5 space-y-2.5 text-sm text-ivory/80">
            <li><Link to="/listings" className="hover:text-gold">{t("nav.listings")}</Link></li>
            <li><Link to="/buying" className="hover:text-gold">{t("nav.buying")}</Link></li>
            <li><Link to="/selling" className="hover:text-gold">{t("nav.selling")}</Link></li>
            <li><Link to="/communities" className="hover:text-gold">{t("nav.communities")}</Link></li>
            <li><Link to="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{t("footer.contact")}</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>3195 Oak Street<br />Vancouver, BC V6H 2L2</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+16048360506" className="hover:text-gold">+1 (604) 836-0506</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:info@sterlingwong.ca" className="hover:text-gold">
                info@sterlingwong.ca
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ivory/50 md:flex-row">
          <p>© {new Date().getFullYear()} Sterling Wong PREC. {t("footer.rights")}</p>
          <p>黃德權 · {t("footer.bilingual")}</p>
          <p>Web Design by Bluluma.com</p>
        </div>
      </div>
    </footer>
  );
}
