import { motion } from "motion/react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import WhatWeMake from "./components/WhatWeMake";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-brown font-sans selection:bg-brand-gold/30 selection:text-brand-brown">
      {/* Ambient Handcrafted Jute Texture Overlay across the active background */}
      <div className="absolute inset-0 jute-texture pointer-events-none opacity-[0.03] z-0" />

      {/* Floating Welcome Toast Alert notifying them of micro-batches (First Visit Hint) */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-brand-brown/95 backdrop-blur-md border border-white/10 text-white rounded-full py-2.5 px-4 shadow-xl flex items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm">🍪</span>
            <span className="font-sans font-medium text-orange-200">
              Autumn Festive Drop Sign-ups are live!
            </span>
          </div>
          <button
            onClick={scrollToWaitlist}
            className="text-[10px] uppercase font-mono tracking-wider font-bold text-brand-gold border-l border-white/10 pl-3 shrink-0 hover:text-white transition-colors"
          >
            Claim Key
          </button>
        </motion.div>
      </div>

      {/* Main Single Page Layout Blocks */}
      <h1 className="sr-only">GG's Bakehouse - Artisan Home Bakery India</h1>
      
      <Hero onJoinWaitlistClick={scrollToWaitlist} />
      
      <Story />
      
      <WhatWeMake />
      
      <Reviews />
      
      <FAQ />
      
      <Waitlist />
      
      <Footer onJoinWaitlistClick={scrollToWaitlist} />
    </div>
  );
}
