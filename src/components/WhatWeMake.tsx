import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCT_CATEGORIES } from "../data";
import { ProductCategory } from "../types";
import { Sparkles, ArrowUpRight, Check, X } from "lucide-react";

export default function WhatWeMake() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  return (
    <section id="what-we-make" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-brand-cream to-amber-50 text-brand-brown">
      <div className="max-w-6xl mx-auto">
        {/* Sections Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="font-cursive text-3.5xl text-terracotta block mb-2">Our Signature Recipes</span>
            <h2 className="font-serif text-3.xl sm:text-4.5xl font-bold tracking-tight text-brand-brown">
              Baked is a feeling. Browse our category moods.
            </h2>
            <div className="w-16 h-1 bg-brand-gold mt-4" />
          </div>
          <div className="text-left md:text-right max-w-sm">
            <p className="font-sans text-xs text-brand-brown/60 tracking-wider leading-relaxed">
              *All items are crafted on gluten-safe home stations, beautifully curated, and packaged inside reusable linen sacks and biodegradable paper canisters.
            </p>
          </div>
        </div>

        {/* Mood-board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => {
            // Asymmetrical grid column distributions for typical aesthetic moodboard feel
            let gridSpan = "md:col-span-6";
            if (index === 0) gridSpan = "md:col-span-7 lg:col-span-8"; // Primary highlights
            if (index === 1) gridSpan = "md:col-span-5 lg:col-span-4";
            if (index === 2) gridSpan = "md:col-span-5";
            if (index === 3) gridSpan = "md:col-span-7";
            if (index === 4) gridSpan = "md:col-span-12"; // seasonal banner spanning

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${gridSpan} relative group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-orange-100/40 transition-all duration-300 flex flex-col`}
                onClick={() => setSelectedCategory(category)}
              >
                {/* Image panel with zoom on hover */}
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:flex-grow min-h-[250px] bg-orange-10/50">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 duration-700 ease-out transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Hot Spot Ribbon Target */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-brand-brown text-[10px] font-mono tracking-widest uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-gold animate-spin-slow" />
                    {category.highlight}
                  </div>

                  {/* Aesthetic Corner expansion trigger */}
                  <div className="absolute bottom-4 right-4 bg-terracotta text-white w-10 h-10 rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Overlay/Aesthetic Footer inside the Grid Item */}
                <div className="p-6 relative bg-white flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown mb-2 tracking-tight group-hover:text-terracotta transition-colors">
                      {category.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-brown/70 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-orange-50/50 flex flex-wrap gap-2">
                    {category.items.slice(0, 3).map((it, idx) => (
                      <span key={idx} className="font-sans text-[10px] bg-orange-50 text-amber-900 border border-amber-900/10 px-2.5 py-0.5 rounded-full select-none">
                        {it}
                      </span>
                    ))}
                    {category.items.length > 3 && (
                      <span className="font-sans text-[10px] text-brand-gold font-bold">
                        +{category.items.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal display overlay detailed content of chosen Category */}
        <AnimatePresence>
          {selectedCategory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Back backdrop blur click closer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
                className="absolute inset-0 bg-brand-brown/80 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-orange-100 z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]"
              >
                {/* Modal Visuals Left panel */}
                <div className="w-full md:w-1/2 relative bg-orange-50 min-h-[220px] md:min-h-0">
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold bg-black/40 px-2 py-0.5 rounded backdrop-blur-md font-bold mb-1.5 inline-block">
                      {selectedCategory.highlight}
                    </span>
                    <h4 className="font-serif text-2xl font-bold">{selectedCategory.title}</h4>
                  </div>
                </div>

                {/* Modal Texts Right Panel */}
                <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[450px] md:max-h-none">
                  {/* Title Header Close trigger button */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[10px] tracking-widest text-brand-gold font-bold uppercase">Recipe Selection</span>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="p-1 rounded-full bg-orange-50 text-brand-brown/70 hover:bg-orange-100 hover:text-brand-brown transition-colors cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="font-sans text-sm text-brand-brown/80 leading-relaxed mb-6 bg-orange-50/40 p-4 rounded-xl border border-orange-100/30">
                      {selectedCategory.description}
                    </p>

                    <h5 className="font-serif text-md font-bold text-brand-brown mb-3 flex items-center gap-1.5 border-b border-orange-50 pb-2">
                      <Sparkles className="w-4 h-4 text-brand-gold" /> Included in micro-boxes:
                    </h5>

                    {/* Pack contents checking boxes list */}
                    <ul className="space-y-2.5">
                      {selectedCategory.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-sm text-brand-brown/90 font-sans">
                          <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-terracotta" />
                          </span>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link Closer */}
                  <div className="mt-8 pt-4 border-t border-orange-50 flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-wider text-brand-brown/50">LTD DROPS ONLY</span>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        const waitlistSection = document.getElementById("waitlist");
                        if (waitlistSection) {
                          waitlistSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-xs text-terracotta font-sans font-bold hover:underline tracking-wider uppercase flex items-center gap-1"
                    >
                      Pre-reserve Spot →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
