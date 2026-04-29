import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import heroLuxury from "@/assets/sterling/hero-luxury.jpg";
import about from "@/assets/sterling/about.jpg";
import aurora from "@/assets/sterling/presale-aurora.jpg";
import crescent from "@/assets/sterling/presale-crescent.jpg";
import skyline from "@/assets/sterling/presale-skyline.jpg";
import l1 from "@/assets/sterling/listing-1.jpg";
import l2 from "@/assets/sterling/listing-2.jpg";
import l3 from "@/assets/sterling/listing-3.jpg";
import l4 from "@/assets/sterling/listing-4.jpg";
import l5 from "@/assets/sterling/listing-5.jpg";
import l6 from "@/assets/sterling/listing-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sterling Wong — Vancouver Real Estate, Elevated" },
      {
        name: "description",
        content:
          "Exclusive Vancouver properties, pre-sale opportunities, and tailored buying strategies with Sterling Wong PREC.",
      },
      { property: "og:title", content: "Sterling Wong — Vancouver Real Estate, Elevated" },
      {
        property: "og:description",
        content:
          "Exclusive properties, pre-sale opportunities, and tailored buying strategies across Metro Vancouver.",
      },
    ],
  }),
  component: HomePage,
});

const PRESALES = [
  {
    no: "01",
    name: "Aurora Residence",
    location: "Vancouver West",
    type: "Luxury Condominium",
    price: "From $1,200,000",
    tag: "Pre-Sale Opportunity",
    description:
      "A vertical landmark of glass and stone, perched between mountain and sea. Private elevator access, hotel-grade amenities, and curated interiors by a celebrated Vancouver studio.",
    img: aurora,
  },
  {
    no: "02",
    name: "The Crescent Collection",
    location: "Richmond",
    type: "Boutique Townhomes",
    price: "From $950,000",
    tag: "Limited Release",
    description:
      "Twenty-four architecturally distinct townhomes set within a quiet, tree-lined enclave. Generous floorplans, private rooftop terraces, and a refined material palette of stone, oak and bronze.",
    img: crescent,
  },
  {
    no: "03",
    name: "Skyline Tower",
    location: "Burnaby",
    type: "High-Rise Residences",
    price: "From $780,000",
    tag: "New Development",
    description:
      "An icon on the city's evolving skyline. Floor-to-ceiling glass frames panoramic views of Metrotown, the North Shore mountains and the harbour beyond.",
    img: skyline,
  },
];

function HomePage() {
  return (
    <div className="bg-charcoal text-ivory">
      {/* ============== 1. FULLSCREEN HERO ============== */}
      <section className="relative isolate h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src={heroLuxury}
          alt="Vancouver skyline at dusk from a luxury penthouse"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal" />

        {/* top meta bar */}
        <div className="absolute inset-x-0 top-0 z-10 hidden items-center justify-between px-10 pt-8 text-[10px] uppercase tracking-[0.4em] text-ivory/60 md:flex">
          <span>Est. Vancouver</span>
          <span>Volume 01 — 2026 Portfolio</span>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
          <span className="mb-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            A Sterling Wong Portfolio
          </span>
          <h1 className="font-display max-w-5xl text-[14vw] leading-[0.92] text-ivory text-balance sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            Vancouver
            <br />
            Real Estate,
            <br />
            <span className="italic font-serif font-light text-gold">Elevated.</span>
          </h1>
          <div className="mt-10 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-ivory/75">
              Exclusive properties, pre-sale opportunities, and tailored buying strategies for those who expect more from where they live.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/listings"
                className="group inline-flex items-center justify-between gap-8 border border-ivory/30 bg-ivory/5 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory backdrop-blur transition hover:border-gold hover:text-gold"
              >
                Explore Properties
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-12" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-8 bg-gold px-7 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition hover:bg-ivory"
              >
                Book Private Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ivory/50 md:flex">
          <span>Scroll</span>
          <span className="h-10 w-px bg-ivory/30" />
        </div>
      </section>

      {/* ============== 2. FEATURED PRE-SALE — EDITORIAL ============== */}
      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-8 border-b border-ivory/10 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">The Portfolio</p>
              <h2 className="mt-6 font-display text-5xl text-ivory text-balance sm:text-6xl md:text-7xl">
                Featured pre-sale
                <br />
                <span className="italic font-serif font-light text-ivory/60">opportunities.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
              A small, deliberate selection of new developments — each chosen for its location, architecture and long-term value.
            </p>
          </div>

          <div className="mt-20 space-y-32">
            {PRESALES.map((p, i) => (
              <article
                key={p.name}
                className={`grid gap-10 md:grid-cols-12 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-7">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.name} — ${p.location}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition duration-[1200ms] hover:scale-[1.03] md:aspect-[5/6]"
                    />
                    <span className="absolute left-0 top-0 bg-charcoal px-5 py-3 text-[10px] uppercase tracking-[0.32em] text-gold">
                      {p.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center md:col-span-5">
                  <span className="font-display text-7xl text-ivory/15">{p.no}</span>
                  <h3 className="mt-4 font-display text-4xl text-ivory text-balance md:text-5xl">
                    {p.name}
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-ivory/10 py-5 text-xs uppercase tracking-[0.22em] text-ivory/50">
                    <div>
                      <p className="text-[9px] tracking-[0.3em] text-ivory/40">Location</p>
                      <p className="mt-2 text-ivory">{p.location}</p>
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.3em] text-ivory/40">Type</p>
                      <p className="mt-2 text-ivory">{p.type}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-ivory/70">{p.description}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-ivory/10 pt-6">
                    <span className="font-display text-2xl text-gold">{p.price}</span>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory hover:text-gold"
                    >
                      Request Details
                      <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-12" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 3. PHILOSOPHY — IVORY CONTRAST ============== */}
      <section className="bg-ivory py-28 text-charcoal md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Philosophy</p>
              <h2 className="mt-6 font-display text-5xl text-balance md:text-6xl">
                Why Sterling
                <br />
                <span className="italic font-serif font-light">Wong.</span>
              </h2>
            </div>

            <div className="md:col-span-8 md:pl-8">
              <p className="font-display text-2xl leading-snug text-charcoal text-balance md:text-3xl">
                Real estate is not a transaction — it is a position. A statement of taste, of timing, of trust. My role is to give you the access, the strategy and the quiet confidence to make the right move.
              </p>

              <div className="mt-16 grid gap-12 sm:grid-cols-3">
                {[
                  {
                    n: "Expertise",
                    c: "A decade studying Vancouver's micro-markets, from West Side detached to downtown pre-construction.",
                  },
                  {
                    n: "Strategy",
                    c: "Pricing, negotiation and timing — engineered around your goals, not the market's noise.",
                  },
                  {
                    n: "Access",
                    c: "Direct relationships with developers, presenting pre-sale opportunities before they reach the public.",
                  },
                ].map((b) => (
                  <div key={b.n} className="border-t border-charcoal/15 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{b.n}</p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{b.c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 4. FEATURED PROPERTIES — MINIMAL ============== */}
      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between border-b border-ivory/10 pb-8">
            <h2 className="font-display text-4xl text-ivory md:text-5xl">
              Selected properties
            </h2>
            <Link
              to="/listings"
              className="hidden text-[10px] uppercase tracking-[0.32em] text-ivory hover:text-gold sm:inline-flex"
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: l1, name: "Detached Residence", area: "West Side, Vancouver", price: "$4,280,000" },
              { img: l2, name: "Downtown Penthouse", area: "West Georgia, Vancouver", price: "$2,850,000" },
              { img: l3, name: "Family Townhome", area: "Sills Ave, Richmond", price: "$1,690,000" },
              { img: l4, name: "Modern Residence", area: "Cambie, Vancouver", price: "$3,420,000" },
              { img: l5, name: "Urban Apartment", area: "Yaletown, Vancouver", price: "$1,180,000" },
              { img: l6, name: "Station Square", area: "Metrotown, Burnaby", price: "$980,000" },
            ].map((p) => (
              <article key={p.name} className="group">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} in ${p.area}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-ivory">{p.name}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/50">{p.area}</p>
                  </div>
                  <span className="whitespace-nowrap font-display text-base text-gold">{p.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 5. BUYER / SELLER SPLIT ============== */}
      <section className="grid border-y border-ivory/10 md:grid-cols-2">
        <Link
          to="/buying"
          className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-charcoal p-12 text-ivory transition hover:bg-[oklch(0.16_0.006_60)] md:p-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">For Buyers</span>
          <div>
            <h3 className="font-display text-5xl text-balance md:text-6xl">
              Acquire with
              <br />
              <span className="italic font-serif font-light">conviction.</span>
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              From discovery to closing — a calm, considered process led by someone who has walked it hundreds of times.
            </p>
            <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-ivory transition group-hover:text-gold">
              Begin <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <Link
          to="/selling"
          className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-ivory p-12 text-charcoal transition hover:bg-[oklch(0.94_0.005_85)] md:p-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">For Sellers</span>
          <div>
            <h3 className="font-display text-5xl text-balance md:text-6xl">
              Position to
              <br />
              <span className="italic font-serif font-light">command value.</span>
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/60">
              Editorial marketing, sharp pricing strategy, and a network of qualified buyers — assembled around your home.
            </p>
            <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-charcoal transition group-hover:text-gold">
              Begin <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* ============== 6. ABOUT — EDITORIAL ============== */}
      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <img
              src={about}
              alt="Sterling Wong"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">The Advisor</p>
            <h2 className="mt-6 font-display text-5xl text-ivory text-balance md:text-6xl">
              Sterling Wong, <span className="italic font-serif font-light text-ivory/70">PREC.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ivory/70">
              Personal Real Estate Corporation with Oakwyn Realty in Vancouver. Bilingual in English and Cantonese, with a discerning eye for quality and a reputation for discretion. Sterling represents clients across Vancouver, Burnaby and Richmond — from first homes to portfolio acquisitions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ivory/10 pt-6 text-xs uppercase tracking-[0.28em] text-ivory/50">
              <span>Oakwyn Realty</span>
              <span>·</span>
              <span>English / 廣東話</span>
              <span>·</span>
              <span>3195 Oak Street, Vancouver</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 7. FINAL CTA ============== */}
      <section className="relative isolate overflow-hidden bg-ivory py-32 text-charcoal md:py-44">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">An Invitation</p>
          <h2 className="mt-8 font-display text-6xl leading-[0.95] text-charcoal text-balance md:text-8xl">
            Work with
            <br />
            <span className="italic font-serif font-light">Sterling.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-charcoal/65">
            Whether you are exploring a first home, repositioning a portfolio, or considering a pre-sale opportunity — begin with a private conversation.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between gap-8 bg-charcoal px-9 py-5 text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition hover:bg-gold hover:text-charcoal"
            >
              Book Private Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+16048360506"
              className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-charcoal hover:text-gold"
            >
              <Phone className="h-4 w-4" /> +1 (604) 836-0506
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
