import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Sterling Wong</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-gold">
            Personal Real Estate Corporation
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
            Helping clients buy and sell homes across Vancouver, Burnaby, Richmond and the Lower
            Mainland with personalized, bilingual service.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Explore</p>
          <ul className="mt-5 space-y-2.5 text-sm text-ivory/80">
            <li><Link to="/listings" className="hover:text-gold">Listings</Link></li>
            <li><Link to="/buying" className="hover:text-gold">Buying</Link></li>
            <li><Link to="/selling" className="hover:text-gold">Selling</Link></li>
            <li><Link to="/communities" className="hover:text-gold">Communities</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Sterling</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Contact</p>
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
          <p>© {new Date().getFullYear()} Sterling Wong PREC. All rights reserved.</p>
          <p>黃德權 · Bilingual service in English & 廣東話</p>
        </div>
      </div>
    </footer>
  );
}
