import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-amber-50 to-brand-cream text-brand-brown border-t border-orange-100/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Title section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-cursive text-3.5xl text-terracotta">Answering your doubts</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-brand-brown mt-2">
            Curiosities & Details
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/50 mx-auto mt-4" />
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-orange-100/40 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button bar */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 md:p-7 flex justify-between items-center gap-4 bg-transparent cursor-pointer group"
                >
                  <h3 className="font-serif text-base sm:text-lg font-bold text-brand-brown group-hover:text-terracotta transition-colors duration-200">
                    {faq.q}
                  </h3>
                  <div className={`p-1.5 rounded-full bg-orange-50 text-brand-brown/70 group-hover:bg-orange-100 transition-transform duration-300 ${isOpen ? "rotate-180 text-terracotta" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Sliding collapsible answer portal */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-7 md:px-7 md:pb-8 text-neutral-600 border-t border-orange-50/50 pt-4">
                        <p className="font-sans text-sm sm:text-sm text-brand-brown/80 leading-relaxed font-light">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Small contact note */}
        <div className="mt-12 text-center p-6 bg-white/40 border border-orange-100/20 rounded-2xl max-w-xl mx-auto">
          <p className="font-sans text-xs text-brand-brown/60 leading-relaxed">
            Have a pressing question or bespoke corporate enquiry not cleared above? Write to us directly at <a href="mailto:hello@ggsbakehouse.com" className="text-terracotta underline hover:text-orange-500 font-medium">hello@ggsbakehouse.com</a> — our team responds to every letter.
          </p>
        </div>

      </div>
    </section>
  );
}
