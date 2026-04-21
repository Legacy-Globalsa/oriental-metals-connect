import { Reveal } from "./Reveal";
import detailImg from "@/assets/gold-detail.jpg";

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-40 bg-secondary/40">
      <div className="container-narrow grid md:grid-cols-12 gap-16 items-start">
        <Reveal className="md:col-span-5">
          <span className="eyebrow">About Us</span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">
            Connecting supply, demand, and serious opportunity.
          </h2>
          <div className="hairline mt-10" />
          <img
            src={detailImg}
            alt="Gold nugget detail"
            loading="lazy"
            width={1024}
            height={1024}
            className="mt-10 w-full aspect-square object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7 md:pt-14 space-y-8">
          <p className="text-lg leading-relaxed text-foreground/80">
            First Oriental Metals Marketing Company is a dynamic trading and marketing company
            focused on facilitating legitimate, value-driven transactions in gold, metals,
            commodities, and related business opportunities.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            With a commitment to professionalism, transparency, and long-term business
            relationships, we connect buyers, sellers, investors, and strategic partners
            across local and international markets — serving as a dependable bridge between
            supply and demand.
          </p>

          <div className="grid sm:grid-cols-2 gap-10 pt-8">
            <div>
              <span className="eyebrow text-accent">Our Mission</span>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                To provide reliable, ethical, and efficient trading solutions in gold,
                metals, and commodities while building lasting partnerships founded on
                trust, performance, and mutual growth.
              </p>
            </div>
            <div>
              <span className="eyebrow text-accent">Our Vision</span>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                To become a respected and globally connected trading company recognized
                for credibility, professionalism, and excellence in commodity and
                precious metals marketing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border">
            {[
              ["Registered", "First Oriental Metals Mktg. Co."],
              ["Founded", "2019"],
              ["Location", "San Pedro, Laguna, PH"],
              ["Focus", "Gold · Commodities"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="eyebrow text-[10px]">{k}</div>
                <div className="mt-2 font-serif text-base">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
