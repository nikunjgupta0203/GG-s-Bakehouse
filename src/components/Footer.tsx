import { Sparkles, Instagram, Mail, Heart } from "lucide-react";

interface FooterProps {
  onJoinWaitlistClick: () => void;
}

export default function Footer({ onJoinWaitlistClick }: FooterProps) {
  return (
    <footer className="bg-brand-brown text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
      {/* Absolute faint background circle glow */}
      <div className="absolute -bottom-12 right-12 w-64 h-64 bg-brand-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-orange-50 pr-0.5 select-none">
                <span className="font-cursive text-xl text-terracotta leading-none font-bold">GG</span>
              </div>
              <span className="font-cursive text-2xl text-white tracking-wide">
                GG's Bakehouse
              </span>
            </div>
            
            <p className="font-serif italic text-sm text-yellow-500/80 mb-4 tracking-wide">
              "Made with love. Saved for the ones who get it."
            </p>
            <p className="font-sans text-xs text-amber-100/65 leading-relaxed max-w-sm">
              An artisan, home-run confectionery crafting limited drops of premium holiday hampers, hand-crumbled salt cookies, and dangerously good brownie bites across India.
            </p>
          </div>

          {/* Socials & Community */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-[10px] tracking-widest text-brand-gold font-bold uppercase mb-4">Let's Connect</h4>
            <ul className="space-y-3 font-sans text-xs text-amber-100/70">
              <li>
                <a
                  href="https://instagram.com/ggsbakehouse"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>@ggsbakehouse</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>hello@ggsbakehouse.com</span>
              </li>
              <li className="text-[11px] text-amber-100/40 font-mono mt-4 leading-relaxed">
                Delhi base • Delivering Fresh Pan-India daily via custom priority cargo.
              </li>
            </ul>
          </div>

          {/* Shortcuts navigation */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-mono text-[10px] tracking-widest text-brand-gold font-bold uppercase mb-4">Explore</h4>
            <ul className="space-y-2.5 font-sans text-xs text-amber-100/70">
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#what-we-make" className="hover:text-white transition-colors">What We Make</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Common FAQs</a></li>
            </ul>
          </div>

          {/* Action Trigger Box */}
          <div className="md:col-span-2 text-left flex flex-col items-start">
            <h4 className="font-mono text-[10px] tracking-widest text-brand-gold font-bold uppercase mb-4">Priority</h4>
            <button
              onClick={onJoinWaitlistClick}
              className="text-xs text-brand-brown bg-brand-gold hover:bg-yellow-500 font-bold px-4 py-2.5 rounded-lg w-full text-center transition-colors shadow-lg cursor-pointer"
            >
              Get Spot Key
            </button>
            <span className="text-[10px] font-mono text-amber-100/40 mt-3 text-center w-full">
              Autumn drop filling fast
            </span>
          </div>

        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Bottom Rights Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-amber-100/40 font-sans text-xs">
          <div className="flex items-center gap-1">
            <span>© 2026 GG's Bakehouse. Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse inline mx-0.5" />
            <span>in India.</span>
          </div>
          
          <div className="flex gap-6 font-mono text-[10px] tracking-widest uppercase">
            <a href="#waitlist" className="hover:text-white transition-colors">TERMS OF DROP</a>
            <a href="#story" className="hover:text-white transition-colors">Artisan Kitchen</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
