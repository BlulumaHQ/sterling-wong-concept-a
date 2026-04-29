import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Globe2, Mail, MapPin, Phone } from "lucide-react";
import agent from "@/assets/sterling/agent.jpg";
import about from "@/assets/sterling/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sterling Wong PREC | Vancouver REALTOR®" },
      {
        name: "description",
        content:
          "Meet Sterling Wong, a Vancouver Personal Real Estate Corporation dedicated to helping buyers and sellers achieve their real estate goals with care and expertise.",
      },
      { property: "og:title", content: "About Sterling Wong PREC" },
      {
        property: "og:description",
        content:
          "Vancouver REALTOR® offering personalized, bilingual service for buying and selling homes in Metro Vancouver.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-ivory pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">About</p>
          <h1 className="mt-4 font-serif text-5xl text-charcoal sm:text-6xl">
            Sterling Wong, PREC
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Personal Real Estate Corporation · 黃德權
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[2fr_3fr] lg:items-start">
          <div className="relative">
            <img
              src={agent}
              alt="Sterling Wong, Vancouver REALTOR®"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Biography</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal">
              I designed my practice with your interests in mind.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Drop me a line — I'd love to hear your thoughts. I am dedicated to selling your
                home or finding you that dream home you are searching for. You are invited to
                browse my website and call or e-mail me with any questions you have about buying
                or selling a home in the area.
              </p>
              <p>
                I make myself available at all times. My website is here to help you 24 hours a
                day. You can search listings at your own convenience, browse reports, and read up
                on real estate info on your own terms. When you are ready to see a listing in
                person, or just have a simple question, please don't hesitate to contact me.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Card icon={<Award className="h-5 w-5" />} title="Buying a home?">
                Your satisfaction is my top priority. I take time to listen to your needs and help
                you find your dream home.
              </Card>
              <Card icon={<Award className="h-5 w-5" />} title="Selling your home?">
                I get your home sold for top dollar in a timely manner. My online and offline
                marketing programs give the edge needed.
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          {[
            { icon: MapPin, label: "Office", value: "3195 Oak Street, Vancouver, BC" },
            { icon: Phone, label: "Direct", value: "+1 (604) 836-0506", href: "tel:+16048360506" },
            { icon: Mail, label: "Email", value: "info@sterlingwong.ca", href: "mailto:info@sterlingwong.ca" },
            { icon: Globe2, label: "Languages", value: "English & 廣東話 (Cantonese)" },
            { icon: Award, label: "Designation", value: "Personal Real Estate Corporation" },
            { icon: Award, label: "Brokerage", value: "Oakwyn Realty" },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="border-t border-border pt-5">
              <div className="flex items-center gap-2 text-gold">
                <Icon className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.28em]">{label}</span>
              </div>
              {href ? (
                <a href={href} className="mt-2 block font-serif text-xl text-charcoal hover:text-gold">
                  {value}
                </a>
              ) : (
                <p className="mt-2 font-serif text-xl text-charcoal">{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-charcoal py-20 text-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img
            src={about}
            alt=""
            className="mx-auto mb-10 aspect-[3/2] w-full max-w-2xl rounded-sm object-cover opacity-90"
          />
          <h2 className="font-serif text-4xl">Let's start the conversation</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75">
            Whether you're ready to make a move or just exploring, I'd be glad to share my
            perspective on the market.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-ivory"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-sm border border-border bg-card p-6">
      <div className="flex items-center gap-3 text-gold">{icon}<span className="text-[11px] uppercase tracking-[0.28em]">Service</span></div>
      <h3 className="mt-3 font-serif text-2xl text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
