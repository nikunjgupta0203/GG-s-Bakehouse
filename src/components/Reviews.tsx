import { motion } from "motion/react";
import { REVIEWS } from "../data";
import { Quote, Sparkles } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-cream text-brand-brown border-t border-orange-100/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-cursive text-3.5xl text-terracotta">A community of lovers</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-brand-brown mt-2">
            Praise from the ones 'who get it'
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/50 mx-auto mt-4" />
        </div>

        {/* Postcards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => {
            // Slight randomized rotations to make cards look organically taped or dropped on a tabletop
            const rotations = ["-rotate-1 group-hover:-rotate-0", "rotate-1 group-hover:rotate-0", "-rotate-0.5 group-hover:rotate-0"];
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col justify-between p-8 bg-white rounded-3xl shadow-md border border-orange-50 relative hover:shadow-xl transition-all duration-300 transform"
              >
                {/* Vintage stamp / sticker charm */}
                <div className="absolute top-4 right-4 text-orange-200 pointer-events-none opacity-40">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Card Content Header */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-5">
                    {review.tags.map((tag, idx) => (
                      <span key={idx} className="font-mono text-[9px] uppercase tracking-wider font-bold bg-orange-50 text-terracotta py-0.5 px-2.5 rounded-full border border-orange-100/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-serif text-base text-brand-brown/95 leading-relaxed italic mb-8 relative z-10">
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-orange-50/50 flex justify-between items-center">
                  <div>
                    <h4 className="font-sans text-sm font-bold text-brand-brown">{review.name}</h4>
                    <span className="font-sans text-xs text-brand-brown/50">{review.location}</span>
                  </div>
                  <div className="flex gap-1 text-brand-gold">
                    <Sparkles className="w-4 h-4 fill-brand-gold" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand visual callout bar */}
        <div className="mt-20 text-center py-6 border-y border-orange-100/30 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-brand-brown/60 font-mono text-xs uppercase tracking-widest font-bold">
          <span className="flex items-center gap-1.5"><strong className="text-terracotta">✓</strong> Delhi delivery</span>
          <span className="flex items-center gap-1.5"><strong className="text-terracotta">✓</strong> Fast Shipping Pan-India</span>
          <span className="flex items-center gap-1.5"><strong className="text-terracotta">✓</strong> Micro-Lot Sourcing</span>
          <span className="flex items-center gap-1.5"><strong className="text-terracotta">✓</strong> Custom Jute Sacks</span>
        </div>
      </div>
    </section>
  );
}
