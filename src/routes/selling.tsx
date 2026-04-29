import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, CheckCircle2, Globe, Megaphone, Tag } from "lucide-react";
import hero from "@/assets/sterling/listing-2.jpg";

export const Route = createFileRoute("/selling")({
  head: () => ({
    meta: [
      { title: "Selling Your Home in Vancouver | Sterling Wong PREC" },
      {
        name: "description",
        content:
          "Sell your Vancouver home for top dollar with Sterling Wong PREC. Targeted MLS® and digital marketing, sharp pricing strategy, and expert negotiation.",
      },
      { property: "og:title", content: "Sell Your Home with Sterling Wong PREC" },
      {
        property: "og:description",
        content:
          "Modern marketing, MLS® exposure and pricing strategy to sell your Vancouver home for top dollar.",
      },
    ],
  }),
  component: SellingPage,
});

const PILLARS = [
  {
    icon: Globe,
    title: "24/7 Online Presence",
    body: "My online marketing system makes information accessible 24 hours a day and responds immediately to every prospective buyer.",
  },
  {
    icon: Megaphone,
    title: "Multi-channel Marketing",
    body: "Your home is listed on MLS® and promoted across social channels including Facebook and Instagram.",
  },
  {
    icon: Tag,
    title: "Strategic Pricing",
    body: "A Comparative Market Analysis (CMA) shows the price range buyers are paying — so we attract the right offers.",
  },
  {
    icon: BarChart3,
    title: "Personal Home Search",
    body: "Your listing is automatically e-mailed to prospective buyers in my database whose criteria match.",
  },
];

function SellingPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-ivory">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Selling</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl sm:text-6xl">
            Top dollar, in the shortest period of time.
          </h1>
          <p className="mt-6 max-w-2xl text-ivory/85">
            My combination of skill, experience, and technology ensures I can sell your home for
            the highest possible price — backed by the tools to meet the demands of today's
            highly competitive market.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I will work for you every step of the way. From listing on the MLS® database to
            preparing a professional Comparative Market Analysis, my goal is simple: get your
            home sold for the highest possible price in the shortest period of time.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">My System</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
              The Sterling Wong marketing system
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex gap-5 rounded-sm border border-border bg-card p-7">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-sm bg-charcoal text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Seller checklist</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal">What to expect</h2>
          </div>
          <ul className="space-y-4 text-base text-muted-foreground">
            {[
              "Comparative Market Analysis (CMA) for accurate pricing",
              "Professional listing on MLS® and major platforms",
              "Targeted social media exposure across Facebook & Instagram",
              "Direct e-mail to qualified buyers in my database",
              "Negotiation strategy aimed at maximum value",
              "Full support through inspection, financing and closing",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-gold" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl">Curious what your home is worth?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75">
            Request a complimentary, no-obligation valuation. I'll prepare a personalized report
            for your home and neighbourhood.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-ivory"
          >
            Request Free Valuation
          </Link>
        </div>
      </section>
    </div>
  );
}
