import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Gold Trading",
    desc: "Marketing, sourcing, buying, and selling of gold and related precious metal opportunities — connecting serious counterparties for legitimate transactions.",
  },
  {
    n: "02",
    title: "Commodity Trading",
    desc: "Facilitating trade in selected commodities with trusted partners and networks to support efficient supply arrangements and distribution.",
  },
  {
    n: "03",
    title: "Sourcing & Procurement",
    desc: "Locating qualified suppliers and product opportunities aligned with client requirements, specifications, and market needs.",
  },
  {
    n: "04",
    title: "Buyer & Seller Matching",
    desc: "Connecting serious buyers with legitimate sellers through structured introductions and opportunity assessment.",
  },
  {
    n: "05",
    title: "Strategic Trade Facilitation",
    desc: "Supporting business discussions, transaction coordination, and partnership development across metals and commodities.",
  },
  {
    n: "06",
    title: "Networking & Market Linkages",
    desc: "Building valuable commercial connections that open doors to local and international trade opportunities.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">
              Six disciplines, one disciplined approach.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 md:pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Every engagement is approached with due diligence, professionalism, and
              respect for all parties involved — built to close transactions and
              establish partnerships of sustainable value.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="bg-background p-10 h-full group hover:bg-secondary/50 transition-colors duration-700 cursor-default">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif text-3xl text-accent">{s.n}</span>
                  <span className="h-px w-10 bg-border group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
                </div>
                <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
