import { Reveal } from "./Reveal";
import servicesFeatureImg from "@/assets/silver-to-gold-ratio-848x395-1.jpg";

const services = [
  {
    n: "01",
    title: "Gold Trading",
    desc: "Marketing, sourcing, buying, and selling of gold and related precious metal opportunities — connecting serious counterparties for legitimate transactions.",
    accent: "text-gold",
  },
  {
    n: "02",
    title: "Silver Trading",
    desc: "Sourcing, marketing, and facilitating trade of silver bullion, silver bars, and silver-related investment opportunities with verified and trusted networks.",
    accent: "text-silver",
  },
  {
    n: "03",
    title: "Commodity Trading",
    desc: "Facilitating trade in selected commodities with trusted partners and networks to support efficient supply arrangements and distribution.",
    accent: "text-gold",
  },
  {
    n: "04",
    title: "Sourcing & Procurement",
    desc: "Locating qualified suppliers and product opportunities aligned with client requirements, specifications, and market needs.",
    accent: "text-silver",
  },
  {
    n: "05",
    title: "Buyer & Seller Matching",
    desc: "Connecting serious buyers with legitimate sellers through structured introductions and opportunity assessment.",
    accent: "text-gold",
  },
  {
    n: "06",
    title: "Strategic Trade Facilitation",
    desc: "Supporting business discussions, transaction coordination, and partnership development across metals and commodities.",
    accent: "text-silver",
  },
  {
    n: "07",
    title: "Networking & Market Linkages",
    desc: "Building valuable commercial connections that open doors to local and international trade opportunities.",
    accent: "text-gold",
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
              Seven disciplines, one disciplined approach.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 md:pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Every engagement is approached with due diligence, professionalism, and
              respect for all parties involved — built to close transactions and
              establish partnerships of sustainable value. From{" "}
              <span className="text-gold font-medium">gold</span> to{" "}
              <span className="text-silver font-medium">silver</span> and beyond.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="bg-background p-10 h-full group hover:bg-secondary/50 transition-colors duration-700 cursor-default">
                <div className="flex items-baseline justify-between mb-8">
                  <span className={`font-serif text-3xl ${s.accent}`}>{s.n}</span>
                  <span className="h-px w-10 bg-border group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
                </div>
                <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={services.length * 0.05} className="lg:col-span-2">
            <div className="relative min-h-[19rem] h-full overflow-hidden bg-secondary/40">
              <img
                src={servicesFeatureImg}
                alt="Precious metals service feature"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
