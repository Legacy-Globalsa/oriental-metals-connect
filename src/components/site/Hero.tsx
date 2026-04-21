import { motion } from "framer-motion";
import heroImg from "@/assets/gold-hero.jpg";

import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fade: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 * i, ease },
  }),
};

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div initial="hidden" animate="show" custom={0} variants={fade} className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">Philippines · Est. 2019</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight"
          >
            Trusted partner in <em className="text-gold not-italic font-medium">gold</em>, commodities & global opportunities.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            First Oriental Metals Marketing Company connects buyers, sellers, and strategic
            partners through integrity, market knowledge, and professional service.
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={3} variants={fade} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 text-sm hover:bg-foreground/90 transition-all duration-500"
            >
              Contact Us
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm border border-foreground/20 hover:border-foreground transition-all duration-500"
            >
              Explore Our Services
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="flex items-center gap-8 pt-8 text-xs text-muted-foreground"
          >
            <span>Trading Value.</span>
            <span className="h-px w-8 bg-border" />
            <span>Delivering Trust.</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={heroImg}
              alt="Gold bullion bars representing precious metal trading"
              className="w-full h-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 shadow-soft">
            <div className="eyebrow mb-1">Core Focus</div>
            <div className="font-serif text-xl">Gold · Metals · Commodities</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
