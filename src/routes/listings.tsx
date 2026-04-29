import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import l1 from "@/assets/sterling/listing-1.jpg";
import l2 from "@/assets/sterling/listing-2.jpg";
import l3 from "@/assets/sterling/listing-3.jpg";
import l4 from "@/assets/sterling/listing-4.jpg";
import l5 from "@/assets/sterling/listing-5.jpg";
import l6 from "@/assets/sterling/listing-6.jpg";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Listings | Sterling Wong PREC Vancouver Real Estate" },
      {
        name: "description",
        content:
          "Browse curated Vancouver, Burnaby and Richmond listings with Sterling Wong PREC — houses, condos, townhomes and presale opportunities updated regularly.",
      },
      { property: "og:title", content: "Vancouver Listings | Sterling Wong PREC" },
      {
        property: "og:description",
        content:
          "Explore featured houses, condos, townhomes and presales across Metro Vancouver.",
      },
    ],
  }),
  component: ListingsPage,
});

const CATEGORIES = [
  { label: "Houses", desc: "Detached homes across Greater Vancouver" },
  { label: "Townhomes", desc: "Family-friendly, low-maintenance living" },
  { label: "Condos", desc: "Urban living in the city's best buildings" },
  { label: "Presale", desc: "New construction opportunities in BC" },
];

const LISTINGS = [
  { img: l1, title: "Detached Family Home", area: "West King Edward, Vancouver", type: "Houses" },
  { img: l2, title: "Downtown Condo Residence", area: "West Georgia, Vancouver", type: "Condos" },
  { img: l3, title: "Spacious Townhome", area: "Sills Ave, Richmond", type: "Townhomes" },
  { img: l4, title: "Modern City Home", area: "Vancouver", type: "Houses" },
  { img: l5, title: "Boutique Apartment", area: "Metro Vancouver", type: "Condos" },
  { img: l6, title: "Station Square Tower", area: "Metrotown, Burnaby", type: "Presale" },
];

function ListingsPage() {
  return (
    <div>
      <section className="bg-ivory pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Properties</p>
          <h1 className="mt-4 font-serif text-5xl text-charcoal sm:text-6xl">Current Listings</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A curated selection of homes in Vancouver, Burnaby, and Richmond. For the full MLS®
            search and live updates, visit my Virtual Office Website.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div
                key={c.label}
                className="rounded-sm border border-border bg-card p-6 transition hover:border-gold"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Category</p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">{c.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LISTINGS.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-sm bg-card shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.area}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-charcoal/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory">
                    {p.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-charcoal">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {p.area}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-gold"
                  >
                    Inquire <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl">Looking for something specific?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75">
            Tell me what you're looking for and I'll send you tailored listings — including
            off-market opportunities — within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-ivory"
          >
            Request Custom Search
          </Link>
        </div>
      </section>
    </div>
  );
}
