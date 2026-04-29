import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Compass, FileSearch, KeyRound, ShieldCheck } from "lucide-react";
import hero from "@/assets/sterling/listing-1.jpg";

export const Route = createFileRoute("/buying")({
  head: () => ({
    meta: [
      { title: "Buying a Home in Vancouver | Sterling Wong PREC" },
      {
        name: "description",
        content:
          "Buy your next home in Metro Vancouver with Sterling Wong PREC. Personalized search, expert negotiation, and step-by-step guidance from offer to closing.",
      },
      { property: "og:title", content: "Buying a Home with Sterling Wong PREC" },
      {
        property: "og:description",
        content:
          "Personalized buying service across Vancouver, Burnaby and Richmond — from search to closing.",
      },
    ],
  }),
  component: BuyingPage,
});

const STEPS = [
  {
    icon: Compass,
    title: "Define your goals",
    body: "Why are you buying? Equity, family, lifestyle, investment? We'll separate must-haves from nice-to-haves.",
  },
  {
    icon: FileSearch,
    title: "Get pre-qualified",
    body: "I refer you to mortgage professionals with a proven track record so you shop with confidence.",
  },
  {
    icon: KeyRound,
    title: "Find the right home",
    body: "Using MLS® and my network, we identify homes that match your specifications — including off-market options.",
  },
  {
    icon: ShieldCheck,
    title: "Close with confidence",
    body: "I help you complete financing, inspections, and closing — making the experience pleasant and successful.",
  },
];

function BuyingPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-ivory">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Buying</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl sm:text-6xl">
            Let me help you every step of the way.
          </h1>
          <p className="mt-6 max-w-2xl text-ivory/85">
            When purchasing a home, you're faced with many decisions. With me at your side, the
            process becomes easier, more enjoyable, less time-consuming, and less expensive than
            doing it on your own.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Locating the perfect home is not always an easy task, and obtaining a mortgage loan
            can be complex. Once you decide to move forward, the rewards are unquestionable. I
            help you prepare so sellers see you as a preferred buyer, locate and assess
            properties that match your specifications, and guide you through the details of the
            actual purchase.
          </p>
          <p className="mt-5">
            I am always familiar with the current homes on the market, and I know neighbourhood
            values well — so I can help you determine which properties are fairly priced and in
            good condition before you start your search.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Process</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
              A clear path to your next home
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-sm border border-border bg-card p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-charcoal text-gold">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-3xl text-gold">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">What you get</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal">
              The right resources, end-to-end
            </h2>
          </div>
          <ul className="space-y-4 text-base text-muted-foreground">
            {[
              "Tailored property search using MLS® and private networks",
              "Honest neighbourhood and value insights",
              "Coordinated inspections and financing referrals",
              "Skilled offer strategy and negotiation",
              "Bilingual guidance — English & 廣東話",
              "Dedicated communication from search to closing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl">Ready to start your home search?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75">
            Tell me what you're looking for and I'll send tailored listings within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-ivory"
          >
            Book a Buyer Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
