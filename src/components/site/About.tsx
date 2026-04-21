import { Reveal } from "./Reveal";
import detailImg from "@/assets/gold-detail.jpg";
import silverImg from "@/assets/silver-hero.png";

export const About = () => {
  const companyFacts = [
    ["Registered", "First Oriental Metals Mktg. Co."],
    ["Founded", "2019"],
    ["Location", "San Pedro, Laguna, PH"],
    ["Focus", "Gold · Silver · Commodities"],
  ] as const;

  return (
    <section id="about" className="py-28 md:py-40 bg-secondary/40">
      <div className="container-narrow space-y-14 md:space-y-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-4">
            <span className="eyebrow">About Us</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">
              Connecting supply, demand, and serious opportunity.
            </h2>
            <div className="hairline mt-10" />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8 md:pt-4 space-y-8">
            <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl">
              First Oriental Metals Marketing Company is a dynamic trading and marketing company
              focused on facilitating legitimate, value-driven transactions in{" "}
              <span className="text-gold font-medium">gold</span>,{" "}
              <span className="text-silver font-medium">silver</span>, metals,
              commodities, and related business opportunities.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">
              With a commitment to professionalism, transparency, and long-term business
              relationships, we connect buyers, sellers, investors, and strategic partners
              across local and international markets — serving as a dependable bridge between
              supply and demand for precious metals including gold and silver.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal delay={0.15} className="md:col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-4 md:gap-5 items-start">
              <div className="relative aspect-[4/5] overflow-hidden group md:translate-y-8">
                <img
                  src={detailImg}
                  alt="Gold nugget detail"
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium">Gold</span>
              </div>
              <div className="relative aspect-square overflow-hidden group">
                <img
                  src={silverImg}
                  alt="Silver bullion detail"
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium">Silver</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              {companyFacts.map(([label, value]) => (
                <div key={label}>
                  <div className="eyebrow text-[10px]">{label}</div>
                  <div className="mt-2 font-serif text-base">{value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-7 md:pt-6 space-y-8">
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <span className="eyebrow text-accent">Our Mission</span>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  To provide reliable, ethical, and efficient trading solutions in gold,
                  silver, metals, and commodities while building lasting partnerships founded on
                  trust, performance, and mutual growth.
                </p>
              </div>
              <div>
                <span className="eyebrow text-accent">Our Vision</span>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  To become a respected and globally connected trading company recognized
                  for credibility, professionalism, and excellence in commodity and
                  precious metals marketing — with gold and silver at the core.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
