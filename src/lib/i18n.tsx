import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

type Dict = Record<string, string>;

const EN: Dict = {
  // Header / nav
  "nav.home": "Home",
  "nav.listings": "Listings",
  "nav.buying": "Buying",
  "nav.selling": "Selling",
  "nav.communities": "Communities",
  "nav.about": "About",
  "nav.contact": "Contact",
  "header.regions": "Vancouver · Burnaby · Richmond",
  "header.langs": "English / 廣東話",
  "header.book": "Book Consultation",
  "header.prec": "Personal Real Estate Corp.",

  // Common
  "cta.explore": "Explore Properties",
  "cta.book": "Book Private Consultation",
  "cta.viewAll": "View Full Portfolio →",
  "cta.requestDetails": "Request Details",
  "cta.begin": "Begin",
  "cta.readMore": "Read More",
  "cta.viewListings": "View Listings",

  // Home — hero
  "home.hero.kicker": "A Sterling Wong Portfolio",
  "home.hero.line1": "Vancouver",
  "home.hero.line2": "Real Estate,",
  "home.hero.line3": "Elevated.",
  "home.hero.sub":
    "Exclusive properties, pre-sale opportunities, and tailored buying strategies for those who expect more from where they live.",

  // Home — pre-sale section
  "home.presale.kicker": "The Portfolio",
  "home.presale.title1": "Featured pre-sale",
  "home.presale.title2": "opportunities.",
  "home.presale.intro":
    "A small, deliberate selection of new developments — each chosen for its location, architecture and long-term value.",
  "home.presale.location": "Location",
  "home.presale.type": "Type",

  // Pre-sale items
  "presale.aurora.name": "Aurora Residence",
  "presale.aurora.tag": "Pre-Sale Opportunity",
  "presale.aurora.location": "Vancouver West",
  "presale.aurora.type": "Luxury Condominium",
  "presale.aurora.price": "From $1,200,000",
  "presale.aurora.desc":
    "A vertical landmark of glass and stone, perched between mountain and sea. Private elevator access, hotel-grade amenities, and curated interiors by a celebrated Vancouver studio.",
  "presale.crescent.name": "The Crescent Collection",
  "presale.crescent.tag": "Limited Release",
  "presale.crescent.location": "Richmond",
  "presale.crescent.type": "Boutique Townhomes",
  "presale.crescent.price": "From $950,000",
  "presale.crescent.desc":
    "Twenty-four architecturally distinct townhomes set within a quiet, tree-lined enclave. Generous floorplans, private rooftop terraces, and a refined material palette of stone, oak and bronze.",
  "presale.skyline.name": "Skyline Tower",
  "presale.skyline.tag": "New Development",
  "presale.skyline.location": "Burnaby",
  "presale.skyline.type": "High-Rise Residences",
  "presale.skyline.price": "From $780,000",
  "presale.skyline.desc":
    "An icon on the city's evolving skyline. Floor-to-ceiling glass frames panoramic views of Metrotown, the North Shore mountains and the harbour beyond.",

  // Home — philosophy
  "home.philo.kicker": "Philosophy",
  "home.philo.title1": "Why Sterling",
  "home.philo.title2": "Wong.",
  "home.philo.quote":
    "Real estate is not a transaction — it is a position. A statement of taste, of timing, of trust. My role is to give you the access, the strategy and the quiet confidence to make the right move.",
  "home.philo.expertise": "Expertise",
  "home.philo.expertiseCopy":
    "A decade studying Vancouver's micro-markets, from West Side detached to downtown pre-construction.",
  "home.philo.strategy": "Strategy",
  "home.philo.strategyCopy":
    "Pricing, negotiation and timing — engineered around your goals, not the market's noise.",
  "home.philo.access": "Access",
  "home.philo.accessCopy":
    "Direct relationships with developers, presenting pre-sale opportunities before they reach the public.",

  // Home — selected
  "home.selected.title": "Selected properties",

  // Home — split
  "home.buyers.kicker": "For Buyers",
  "home.buyers.title1": "Acquire with",
  "home.buyers.title2": "conviction.",
  "home.buyers.copy":
    "From discovery to closing — a calm, considered process led by someone who has walked it hundreds of times.",
  "home.sellers.kicker": "For Sellers",
  "home.sellers.title1": "Position to",
  "home.sellers.title2": "command value.",
  "home.sellers.copy":
    "Editorial marketing, sharp pricing strategy, and a network of qualified buyers — assembled around your home.",

  // Home — about
  "home.about.kicker": "The Advisor",
  "home.about.titleName": "Sterling Wong,",
  "home.about.titlePrec": "PREC.",
  "home.about.copy":
    "Personal Real Estate Corporation with Oakwyn Realty in Vancouver. Bilingual in English and Cantonese, with a discerning eye for quality and a reputation for discretion. Sterling represents clients across Vancouver, Burnaby and Richmond — from first homes to portfolio acquisitions.",

  // Home — final
  "home.final.kicker": "An Invitation",
  "home.final.title1": "Work with",
  "home.final.title2": "Sterling.",
  "home.final.copy":
    "Whether you are exploring a first home, repositioning a portfolio, or considering a pre-sale opportunity — begin with a private conversation.",

  // Footer
  "footer.tagline":
    "Helping clients buy and sell homes across Vancouver, Burnaby, Richmond and the Lower Mainland with personalized, bilingual service.",
  "footer.explore": "Explore",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.bilingual": "Bilingual service in English & 廣東話",
};

const ZH: Dict = {
  // Header / nav
  "nav.home": "首頁",
  "nav.listings": "房源",
  "nav.buying": "買樓",
  "nav.selling": "賣樓",
  "nav.communities": "社區",
  "nav.about": "關於",
  "nav.contact": "聯絡",
  "header.regions": "溫哥華 · 本拿比 · 列治文",
  "header.langs": "English / 廣東話",
  "header.book": "預約諮詢",
  "header.prec": "個人地產公司",

  // Common
  "cta.explore": "瀏覽房源",
  "cta.book": "預約私人諮詢",
  "cta.viewAll": "查看全部房源 →",
  "cta.requestDetails": "索取詳情",
  "cta.begin": "開始",
  "cta.readMore": "了解更多",
  "cta.viewListings": "查看房源",

  // Home — hero
  "home.hero.kicker": "Sterling Wong 精選作品集",
  "home.hero.line1": "溫哥華",
  "home.hero.line2": "高端地產,",
  "home.hero.line3": "尊貴呈現。",
  "home.hero.sub":
    "獨家優質房源、樓花預售機會,以及為追求卓越生活的您度身訂造嘅置業策略。",

  // Home — pre-sale
  "home.presale.kicker": "精選作品",
  "home.presale.title1": "焦點樓花",
  "home.presale.title2": "預售項目。",
  "home.presale.intro":
    "嚴選少量全新發展項目 — 每一個都因其地段、建築設計同長遠投資價值而入選。",
  "home.presale.location": "地區",
  "home.presale.type": "類型",

  // Pre-sale items
  "presale.aurora.name": "Aurora 璀璨臻邸",
  "presale.aurora.tag": "樓花預售機會",
  "presale.aurora.location": "溫哥華西區",
  "presale.aurora.type": "豪華柏文",
  "presale.aurora.price": "$1,200,000 起",
  "presale.aurora.desc":
    "玻璃與石材交織嘅垂直地標,坐擁山海之間。私人電梯、酒店級配套、由溫哥華著名設計室操刀嘅精緻室內裝潢。",
  "presale.crescent.name": "Crescent 名門臻選",
  "presale.crescent.tag": "限量發售",
  "presale.crescent.location": "列治文",
  "presale.crescent.type": "精品聯排別墅",
  "presale.crescent.price": "$950,000 起",
  "presale.crescent.desc":
    "二十四間建築風格獨特嘅聯排別墅,坐落於林蔭環抱嘅靜謐社區。寬敞嘅戶型、私人天台花園、配以石材、橡木同青銅嘅高貴用料。",
  "presale.skyline.name": "Skyline 天際塔",
  "presale.skyline.tag": "全新發展項目",
  "presale.skyline.location": "本拿比",
  "presale.skyline.type": "高層住宅",
  "presale.skyline.price": "$780,000 起",
  "presale.skyline.desc":
    "城市新地標。落地玻璃窗將 Metrotown、北岸群山同港灣全景盡收眼底。",

  // Home — philosophy
  "home.philo.kicker": "理念",
  "home.philo.title1": "為何選擇",
  "home.philo.title2": "Sterling Wong。",
  "home.philo.quote":
    "地產買賣絕非單純嘅交易 — 而係一種定位,一種品味、時機同信任嘅體現。我嘅角色,係為您提供獨家渠道、清晰策略,以及做出正確決定所需嘅從容自信。",
  "home.philo.expertise": "專業",
  "home.philo.expertiseCopy":
    "深耕溫哥華各區市場十年,由西區獨立屋到市中心樓花預售,瞭如指掌。",
  "home.philo.strategy": "策略",
  "home.philo.strategyCopy":
    "定價、談判、時機 — 一切圍繞您嘅目標而設計,不被市場噪音左右。",
  "home.philo.access": "渠道",
  "home.philo.accessCopy":
    "與發展商建立直接關係,先於市場為您呈現獨家樓花預售機會。",

  // Home — selected
  "home.selected.title": "精選房源",

  // Home — split
  "home.buyers.kicker": "買家服務",
  "home.buyers.title1": "從容置業,",
  "home.buyers.title2": "信心入手。",
  "home.buyers.copy":
    "由睇樓到成交 — 由經驗豐富嘅專家陪您走過每一步,沉著而專業。",
  "home.sellers.kicker": "賣家服務",
  "home.sellers.title1": "精準定位,",
  "home.sellers.title2": "盡顯價值。",
  "home.sellers.copy":
    "雜誌級別嘅市場推廣、精準定價策略,加上廣闊嘅優質買家網絡 — 為您嘅物業度身訂造。",

  // Home — about
  "home.about.kicker": "您嘅顧問",
  "home.about.titleName": "Sterling Wong,",
  "home.about.titlePrec": "PREC。",
  "home.about.copy":
    "Oakwyn Realty 旗下個人地產公司。中英雙語服務,擁有對品質嘅獨到眼光同對客戶私隱嘅嚴格保護。Sterling 服務範圍涵蓋溫哥華、本拿比同列治文 — 由首次置業到投資組合管理一手包辦。",

  // Home — final
  "home.final.kicker": "誠摯邀請",
  "home.final.title1": "與",
  "home.final.title2": "Sterling 合作。",
  "home.final.copy":
    "無論您正考慮首次置業、調整投資組合,定係物色樓花機會 — 由一次私人對話開始。",

  // Footer
  "footer.tagline":
    "為您度身提供溫哥華、本拿比、列治文及大溫地區嘅買賣樓服務,雙語溝通,貼心專業。",
  "footer.explore": "探索",
  "footer.contact": "聯絡方式",
  "footer.rights": "版權所有。",
  "footer.bilingual": "提供 English 及 廣東話 雙語服務",
};

const DICTS: Record<Lang, Dict> = { en: EN, zh: ZH };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sw-lang") as Lang | null;
      if (saved === "en" || saved === "zh") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("sw-lang", l);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "zh" ? "zh-HK" : "en";
    }
  };

  const t = (key: string) => DICTS[lang][key] ?? DICTS.en[key] ?? key;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // SSR / outside provider fallback — return EN passthrough
    return {
      lang: "en" as Lang,
      setLang: () => {},
      t: (key: string) => DICTS.en[key] ?? key,
    };
  }
  return ctx;
}
