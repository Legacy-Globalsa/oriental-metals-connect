import { Reveal } from "./Reveal";

const values = [
  ["Integrity", "Trust is the foundation of every successful transaction.", "text-gold"],
  ["Professionalism", "We handle business with discipline, respect, and accountability.", "text-silver"],
  ["Commitment", "Dedicated to serving clients and partners with consistency and purpose.", "text-gold"],
  ["Partnership", "We value long-term relationships over short-term gains.", "text-silver"],
  ["Excellence", "High standards in communication, coordination, and execution.", "text-gold"],
];

export const Values = () => {
  return (
    <section id="values" className="py-28 md:py-40">
      <div className="container-narrow">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <span className="eyebrow">Core Values</span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">
            The principles guiding every engagement.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-px bg-border">
          {values.map(([title, desc, accent], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="bg-background p-8 h-full text-center group hover:bg-secondary/40 transition-colors duration-700">
                <div className={`font-serif text-5xl ${accent} mb-6`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl mb-3">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
