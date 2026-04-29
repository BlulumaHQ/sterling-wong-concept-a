import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sterling Wong PREC | Vancouver REALTOR®" },
      {
        name: "description",
        content:
          "Contact Sterling Wong, Vancouver Personal Real Estate Corporation. Call (604) 836-0506 or email to discuss buying or selling your home in Metro Vancouver.",
      },
      { property: "og:title", content: "Contact Sterling Wong PREC" },
      {
        property: "og:description",
        content:
          "Reach out for a personal, bilingual real estate consultation in Metro Vancouver.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="bg-ivory pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-4 font-serif text-5xl text-charcoal sm:text-6xl">Let's talk</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            I personally respond to every inquiry within one business day. Call, email, or fill
            out the form — whichever you prefer.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Reach Sterling</p>
              <ul className="mt-6 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal text-gold">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Direct</p>
                    <a href="tel:+16048360506" className="font-serif text-2xl text-charcoal hover:text-gold">
                      +1 (604) 836-0506
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal text-gold">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</p>
                    <a href="mailto:info@sterlingwong.ca" className="font-serif text-xl text-charcoal hover:text-gold">
                      info@sterlingwong.ca
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal text-gold">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Office</p>
                    <p className="font-serif text-xl text-charcoal">
                      3195 Oak Street<br />Vancouver, BC V6H 2L2
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Sterling Wong office location"
                src="https://www.google.com/maps?q=3195+Oak+Street,+Vancouver,+BC&output=embed"
                className="aspect-[4/3] w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card p-8 lg:p-10">
            <ContactForm
              title="Send a message"
              subtitle="Tell me a bit about your goals and I'll respond personally."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
