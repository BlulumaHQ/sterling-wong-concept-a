import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, Globe2, Home, KeyRound, MapPin, Phone, Star } from "lucide-react";
import heroBanner from "@/assets/sterling/hero-banner.jpg";
import agent from "@/assets/sterling/agent.jpg";
import about from "@/assets/sterling/about.jpg";
import l1 from "@/assets/sterling/listing-1.jpg";
import l2 from "@/assets/sterling/listing-2.jpg";
import l3 from "@/assets/sterling/listing-3.jpg";
import l4 from "@/assets/sterling/listing-4.jpg";
import l5 from "@/assets/sterling/listing-5.jpg";
import l6 from "@/assets/sterling/listing-6.jpg";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sterling Wong PREC | Vancouver Real Estate Specialist" },
      {
        name: "description",
        content:
          "Work with Sterling Wong, a trusted Vancouver REALTOR® helping clients buy and sell homes across Metro Vancouver with personalized, bilingual service.",
      },
      { property: "og:title", content: "Sterling Wong PREC | Vancouver Real Estate" },
      {
        property: "og:description",
        content:
          "Personalized real estate guidance for buyers and sellers across Vancouver, Burnaby and Richmond.",
      },
    ],
  }),
  component: HomePage,
});

const FEATURED = [
  { img: l1, title: "Detached Home", area: "West Side, Vancouver", tag: "Houses" },
  { img: l2, title: "Downtown Condo", area: "West Georgia, Vancouver", tag: "Condos" },
  { img: l3, title: "Family Townhome", area: "Sills Ave, Richmond", tag: "Townhomes" },
  { img: l4, title: "Modern Residence", area: "Vancouver", tag: "Featured" },
  { img: l5, title: "Urban Apartment", area: "Metro Vancouver", tag: "Apartments" },
  { img: l6, title: "Station Square", area: "Burnaby", tag: "Presale" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroBanner}
          alt="Vancouver skyline with mountains — Sterling Wong real estate"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-32">
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="gold-rule" /> Vancouver · Burnaby · Richmond
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Find your dream home with a REALTOR® who listens.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Sterling Wong PREC helps individuals and families buy and sell homes across Metro
            Vancouver — backed by deep neighbourhood knowledge and bilingual, personal service.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal transition hover:bg-ivory"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/listings"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition hover:border-gold hover:text-gold"
            >
              View Listings
            </Link>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-8 border-t border-ivory/15 pt-8 sm:grid-cols-3">
            {[
              { icon: Award, label: "Personal Real Estate Corporation" },
              { icon: Globe2, label: "Bilingual · English & 廣東話" },
              { icon: MapPin, label: "Oakwyn Realty · Vancouver" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3 text-ivory/85">
                <Icon className="mt-0.5 h-5 w-5 text-gold" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-ivory py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">A Trusted Advisor</p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
              Real estate done with care, clarity, and craftsmanship.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I make myself available at all times — my website is here to help you 24 hours a day.
            Search listings on your terms, browse reports, and read up on real estate. When
            you're ready to see a home in person or have a question, I'm one call away.
          </p>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Featured Properties</p>
              <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
                A curated selection of homes
              </h2>
            </div>
            <Link
              to="/listings"
              className="text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-gold"
            >
              View All Listings →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p) => (
              <article
                key={p.title + p.area}
                className="group overflow-hidden rounded-sm bg-card shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} in ${p.area}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-charcoal/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-charcoal">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {p.area}
                  </p>
                  <Link
                    to="/listings"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-gold"
                  >
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUY / SELL */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">How I Can Help</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
              Whether you're buying or selling
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                icon: KeyRound,
                title: "Buy a Home",
                copy: "From your first viewing to closing day — I'll help you locate, assess, and negotiate the right home with confidence.",
                cta: "Explore Buying",
                to: "/buying" as const,
              },
              {
                icon: Home,
                title: "Sell Your Home",
                copy: "A targeted marketing system, sharp pricing strategy, and full MLS exposure to sell your home for top dollar.",
                cta: "Explore Selling",
                to: "/selling" as const,
              },
            ].map((b) => (
              <div
                key={b.title}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-10 transition hover:shadow-elegant"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-charcoal text-gold transition group-hover:bg-gold group-hover:text-charcoal">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-3xl text-charcoal">{b.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{b.copy}</p>
                <Link
                  to={b.to}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-gold"
                >
                  {b.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={about}
              alt="Sterling Wong with a client"
              className="relative z-10 aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-2/3 w-2/3 rounded-sm border border-gold lg:block" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">About Sterling</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
              I am dedicated to selling your home — or finding the one you've been searching for.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Your satisfaction is my top priority. I take the time to listen to your needs and
              desires, and I bring the marketing programs, market knowledge, and negotiation
              experience to make your real estate journey smooth and successful.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-sm bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory hover:bg-gold"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+16048360506"
                className="inline-flex items-center gap-2 rounded-sm border border-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" /> +1 (604) 836-0506
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITIES TEASER */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Communities</p>
              <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
                Where I work
              </h2>
            </div>
            <Link
              to="/communities"
              className="text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-gold"
            >
              All Communities →
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Vancouver", "Burnaby", "Richmond", "Surrey", "New Westminster"].map((c) => (
              <Link
                key={c}
                to="/communities"
                className="group flex items-center justify-between rounded-sm border border-border bg-card px-5 py-5 transition hover:border-gold"
              >
                <span className="font-serif text-xl text-charcoal">{c}</span>
                <Building2 className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="relative isolate overflow-hidden bg-charcoal py-24 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Get in touch</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Ready to make your next move?
            </h2>
            <p className="mt-5 max-w-md text-ivory/75">
              Tell me about your goals — I'll respond personally within one business day with
              clear next steps. No pressure, just honest guidance.
            </p>

            <div className="mt-10 space-y-5 text-sm text-ivory/80">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/15 text-gold">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+16048360506" className="hover:text-gold">+1 (604) 836-0506</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/15 text-gold">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>3195 Oak Street, Vancouver, BC V6H 2L2</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/15 text-gold">
                  <Star className="h-4 w-4" />
                </div>
                <span>Personal, bilingual service · 廣東話 / English</span>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-ivory/10 bg-charcoal/40 p-8 backdrop-blur lg:p-10">
            <ContactForm
              variant="dark"
              title="Request a consultation"
              subtitle="Share a few details and I'll be in touch shortly."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
