import logo from "@/assets/fomm-logo.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FOMM" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-serif text-lg">First Oriental Metals</div>
              <div className="eyebrow text-[10px]">Mktg. Co. · Since 2019</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A Philippines-based trading and marketing company connecting reliable
            buyers, sellers, and strategic partners in gold and commodities.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-[10px] mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            {["About", "Services", "Markets", "Values", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow text-[10px] mb-4">Office</div>
          <p className="text-sm text-foreground/70 leading-relaxed">
            San Pedro, Laguna<br />Philippines
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} First Oriental Metals Mktg. Co. All rights reserved.</span>
          <span className="font-serif italic">Trading Value. Delivering Trust.</span>
        </div>
      </div>
    </footer>
  );
};
