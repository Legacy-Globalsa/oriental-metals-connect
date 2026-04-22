import { useState } from "react";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Inquiry sent. We'll be in touch shortly.");
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-secondary/40">
      <div className="container-narrow grid md:grid-cols-12 gap-16">
        <Reveal className="md:col-span-5 space-y-8">
          <span className="eyebrow">Contact</span>
          <h2 className="text-4xl md:text-5xl leading-[1.05]">
            Get in touch with us.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We welcome business inquiries, partnership opportunities, supplier
            introductions, and serious buyer engagements — whether for{" "}
            <span className="text-gold font-medium">gold</span>,{" "}
            <span className="text-silver font-medium">silver</span>, or other commodities.
          </p>

          <div className="space-y-6 pt-6 border-t border-border">
            <div>
              <div className="eyebrow text-[10px] mb-2">Office</div>
              <div className="font-serif text-lg leading-snug">
                First Oriental Metals Mktg. Co.<br />
                San Pedro, Laguna, Philippines
              </div>
            </div>
            <div>
              <div className="eyebrow text-[10px] mb-2">Email</div>
              <a href="mailto:rollin@firstorientalmetals.com" className="font-serif text-lg hover:text-gold transition-colors">
                rollin@firstorientalmetals.com
              </a>
            </div>
            <div>
              <div className="eyebrow text-[10px] mb-2">Inquiries</div>
              <div className="font-serif text-lg">For partnership & trade discussions</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
          <form onSubmit={onSubmit} className="bg-background p-8 md:p-10 shadow-soft space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="eyebrow text-[10px] block mb-2">Name</label>
                <input required className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 transition-colors" />
              </div>
              <div>
                <label className="eyebrow text-[10px] block mb-2">Company</label>
                <input className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 transition-colors" />
              </div>
            </div>
            <div>
              <label className="eyebrow text-[10px] block mb-2">Email</label>
              <input type="email" required className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 transition-colors" />
            </div>
            <div>
              <label className="eyebrow text-[10px] block mb-2">Inquiry Type</label>
              <select className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 transition-colors">
                <option>Gold Trade Inquiry</option>
                <option>Silver Trade Inquiry</option>
                <option>Commodity Trading</option>
                <option>Partnership Discussion</option>
                <option>Supplier Introduction</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="eyebrow text-[10px] block mb-2">Message</label>
              <textarea required rows={4} className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 resize-none transition-colors" />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 text-sm hover:bg-foreground/90 transition-all duration-500 disabled:opacity-50"
            >
              {sent ? "Message Sent" : "Send Inquiry"}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
