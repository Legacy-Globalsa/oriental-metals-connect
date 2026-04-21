import { Reveal } from "./Reveal";

const industries = [
  "Gold Trading",
  "Silver Trading",
  "Precious Metals",
  "Commodity Supply",
  "Import & Export Support",
  "Trade Marketing",
  "B2B Transactions",
  "Strategic Procurement",
];

const reasons = [
  ["Professional & Reliable", "Disciplined communication, proper documentation, and respectful conduct in every transaction."],
  ["Market-Oriented", "Acute understanding of timing, pricing, demand, and opportunity in trading."],
  ["Relationship-Driven", "Strong business is built on trust, credibility, and long-term partnerships."],
  ["Opportunity-Focused", "Continuously seeking practical and strategic opportunities that create value."],
  ["Integrity in Business", "Transparency, fairness, and professionalism in all commercial engagements."],
];

export const Markets = () => {
  return (
    <section id="markets" className="py-28 md:py-40 bg-foreground text-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-16">
          <Reveal className="md:col-span-5">
            <span className="eyebrow text-background/60">Markets We Serve</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">
              Industries we operate within.
            </h2>
            <ul className="mt-12 space-y-1">
              {industries.map((item, idx) => (
                <li key={item} className="border-b border-background/10 py-4 flex items-baseline gap-6">
                  <span className="font-serif text-sm text-background/40 w-8">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl">{item}</span>
                  {(item === "Gold Trading" || item === "Silver Trading") && (
                    <span
                      className={`ml-auto text-[10px] uppercase tracking-[0.2em] font-medium ${
                        item === "Gold Trading" ? "text-amber-400/80" : "text-slate-300/80"
                      }`}
                    >
                      Core
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <span className="eyebrow text-background/60">Why Choose Us</span>
            <h3 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">
              Built on principle. Measured by trust.
            </h3>

            <div className="mt-12 space-y-8">
              {reasons.map(([title, desc]) => (
                <div key={title} className="group">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="h-px w-6 bg-accent transition-all duration-500 group-hover:w-12" />
                    <h4 className="font-serif text-xl">{title}</h4>
                  </div>
                  <p className="text-background/60 leading-relaxed pl-10 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
