import { motion } from "motion/react";
import FloatingFairyLights from "./FloatingFairyLights";
import heroImg from "../assets/images/gg_hero_bakery_1782197589925.jpg";

interface HeroProps {
  onJoinWaitlistClick: () => void;
}

export default function Hero({ onJoinWaitlistClick }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-brand-brown text-white">
      {/* Background Image with warm, dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="GG's Bakehouse Artisan Sourdough & Cookies Table"
          className="w-full h-full object-cover filter brightness-[0.45] sepia-[15%] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Warm Terracotta and Brown overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/80 via-transparent to-transparent hidden md:block" />
      </div>

      {/* Floating Sparkles & Fairy Lights */}
      <FloatingFairyLights />

      {/* Header Navigation */}
      <header className="relative w-full z-20 px-6 py-6 md:px-12 flex justify-between items-center bg-transparent">
        <div className="flex items-center space-x-2">
          {/* Terracotta/brown on white cursive logo medallion */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-orange-100 pr-1 select-none">
            <span className="font-cursive text-2xl text-terracotta leading-none font-bold">GG</span>
          </div>
          <span className="font-cursive text-2xl md:text-3xl text-white drop-shadow-md tracking-wide">
            GG's Bakehouse
          </span>
        </div>

        <nav className="hidden sm:flex space-x-8 text-sm font-sans tracking-widest text-amber-100/80 uppercase font-medium">
          <a href="#story" className="hover:text-white transition-colors duration-200">Our Story</a>
          <a href="#what-we-make" className="hover:text-white transition-colors duration-200">What We Make</a>
          <a href="#reviews" className="hover:text-white transition-colors duration-200">Reviews & Love</a>
          <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
        </nav>

        <div>
          <button
            onClick={onJoinWaitlistClick}
            className="px-5 py-2 rounded-full border border-amber-200/50 text-amber-100 bg-white/5 backdrop-blur-xs font-sans tracking-wider text-xs uppercase hover:bg-white hover:text-brand-brown transition-all duration-300 shadow-md"
          >
            Waitlist
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex-grow flex items-center px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-3xl text-left">
          {/* Micro-badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-brand-gold/25 rounded-full text-brand-gold font-sans text-xs uppercase tracking-widest mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            Delhi's favourite home bakery • Crafted in Delhi, made for everyone
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-orange-50"
          >
            Made with love. <br />
            <span className="text-brand-gold font-serif italic font-medium">Saved for the ones</span> who get it.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base sm:text-lg md:text-xl text-amber-100/95 font-light tracking-wide max-w-2xl mb-10 leading-relaxed"
          >
            GG's Bakehouse is a Delhi-based creator-run home bakery. We bake in tiny, seasonal drops — focusing on custom-sealed festive hampers, buttery gourmet cookies, and fudgy dangerously good brownie bites.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <button
              onClick={onJoinWaitlistClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-terracotta to-orange-600 hover:from-orange-600 hover:to-terracotta text-white font-sans font-medium tracking-wider text-sm uppercase shadow-2xl shadow-terracotta/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Waitlist
            </button>
            <a
              href="#what-we-make"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-white/20 hover:border-white/50 text-white font-sans tracking-wider text-sm uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              Browse Category Moods
              <span className="transform group-hover:translate-y-1 transition-transform duration-200">↓</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Warm Footer Anchor */}
      <div className="relative z-20 w-full px-6 py-4 md:px-12 flex justify-between items-end border-t border-white/10 text-white/50 text-[11px] font-mono tracking-widest uppercase">
        <div className="flex gap-4">
          <span>CREATIVE BATCH NO. 04</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">BASED IN INDIA</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-200/80">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span>NEXT DROP DEBUTS LATE AUTUMN</span>
        </div>
      </div>
    </section>
  );
}
