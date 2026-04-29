import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "Communities Served | Sterling Wong PREC Vancouver Real Estate" },
      {
        name: "description",
        content:
          "Sterling Wong PREC serves Vancouver, Burnaby, Richmond, Surrey and New Westminster — explore presale projects and neighbourhoods across Metro Vancouver.",
      },
      { property: "og:title", content: "Communities | Sterling Wong PREC" },
      {
        property: "og:description",
        content:
          "Real estate expertise across Vancouver, Burnaby, Richmond, Surrey and New Westminster.",
      },
    ],
  }),
  component: CommunitiesPage,
});

const COMMUNITIES = [
  {
    name: "Vancouver",
    blurb: "From Downtown towers to West Side family homes, Vancouver is where I focus most of my practice.",
    presales: ["Brock", "Cambria", "Marine Gateway", "MC2", "Northwest", "The Independent", "Lido", "VyaLiving", "Cardero", "Aperture", "Belpark", "Navio", "Pinnacle on the Park"],
  },
  {
    name: "Burnaby",
    blurb: "Brentwood, Metrotown and Lougheed transit-oriented living with strong long-term value.",
    presales: ["Concord Brentwood", "Escala", "Etoile", "Fulton House", "Kings Crossing", "Lumina", "Milano", "Pixel", "Station Square", "Triomphe"],
  },
  {
    name: "Richmond",
    blurb: "Family-friendly neighbourhoods with great schools, dining and Skytrain connectivity.",
    presales: ["Calla", "Cascade City", "Orchid", "River Park Place"],
  },
  {
    name: "Surrey",
    blurb: "Rapid-growth city with new master-planned developments around the Expo Line.",
    presales: ["King George Hub"],
  },
  {
    name: "New Westminster",
    blurb: "Historic riverfront character with modern transit-oriented developments.",
    presales: ["The Brewery District"],
  },
];

function CommunitiesPage() {
  return (
    <div>
      <section className="bg-ivory pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Communities</p>
          <h1 className="mt-4 font-serif text-5xl text-charcoal sm:text-6xl">
            Neighbourhoods I know inside out
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Real estate is local. Below are the cities and presale projects I work with most
            often across Metro Vancouver.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-6">
          {COMMUNITIES.map((c) => (
            <div
              key={c.name}
              className="grid gap-8 rounded-sm border border-border bg-card p-8 lg:grid-cols-[1fr_2fr] lg:p-10"
            >
              <div>
                <div className="flex items-center gap-3 text-gold">
                  <Building2 className="h-4 w-4" />
                  <span className="text-[11px] uppercase tracking-[0.28em]">City</span>
                </div>
                <h2 className="mt-3 font-serif text-4xl text-charcoal">{c.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Presale projects</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.presales.map((p) => (
                    <span
                      key={p}
                      className="rounded-sm border border-border bg-background px-3 py-1.5 text-xs text-charcoal"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl">Considering a specific neighbourhood?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75">
            I'll share recent sales, current inventory, and presale opportunities tailored to
            your area of interest.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-ivory"
          >
            Get Neighbourhood Insights
          </Link>
        </div>
      </section>
    </div>
  );
}
