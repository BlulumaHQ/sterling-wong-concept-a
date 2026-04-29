import { useState } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  variant?: "light" | "dark";
  title?: string;
  subtitle?: string;
};

export function ContactForm({ variant = "light", title, subtitle }: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const dark = variant === "dark";
  const inputCls = dark
    ? "w-full border-b border-ivory/30 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/50 focus:border-gold focus:outline-none"
    : "w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal placeholder:text-charcoal/50 focus:border-gold focus:outline-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        // Simulated submit — wire to backend later
        setTimeout(() => {
          setLoading(false);
          setSent(true);
        }, 700);
      }}
      className="space-y-5"
    >
      {(title || subtitle) && (
        <div className="mb-2">
          {title && (
            <h3 className={`font-serif text-3xl ${dark ? "text-ivory" : "text-charcoal"}`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={`mt-2 text-sm ${dark ? "text-ivory/70" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className={inputCls} maxLength={100} />
        <input required name="email" type="email" placeholder="Email" className={inputCls} maxLength={200} />
      </div>
      <input name="phone" type="tel" placeholder="Phone (optional)" className={inputCls} maxLength={30} />
      <select name="interest" className={inputCls + " cursor-pointer"}>
        <option value="" className="bg-background text-foreground">I'm interested in…</option>
        <option className="bg-background text-foreground">Buying a home</option>
        <option className="bg-background text-foreground">Selling my home</option>
        <option className="bg-background text-foreground">Presale opportunities</option>
        <option className="bg-background text-foreground">Free home valuation</option>
        <option className="bg-background text-foreground">General inquiry</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="How can I help?"
        className={inputCls + " resize-none"}
        maxLength={1500}
      />

      <button
        type="submit"
        disabled={loading || sent}
        className={`group inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] transition disabled:opacity-70 sm:w-auto ${
          dark
            ? "bg-gold text-charcoal hover:bg-ivory"
            : "bg-charcoal text-ivory hover:bg-gold"
        }`}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {sent ? "Thank you — I'll be in touch" : "Request Consultation"}
      </button>

      {sent && (
        <p className={`text-xs ${dark ? "text-ivory/70" : "text-muted-foreground"}`}>
          Your inquiry was received. Sterling will personally reply within one business day.
        </p>
      )}
    </form>
  );
}
