import { motion } from "motion/react";
import { STORIES } from "../data";
import { Heart, Gift, Sparkles } from "lucide-react";

export default function Story() {
  const icons = [
    <Heart className="w-5 h-5 text-terracotta" />,
    <Sparkles className="w-5 h-5 text-brand-gold" />,
    <Gift className="w-5 h-5 text-amber-700" />,
  ];

  return (
    <section id="story" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-cream text-brand-brown">
      <div className="max-w-6xl mx-auto">
        {/* Intimate Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-cursive text-3xl text-terracotta">Inside the kitchen</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-brand-brown mt-2">
            Our Brand Story
          </h2>
          <div className="w-24 h-[1px] bg-brand-gold/50 mx-auto mt-4" />
        </div>

        {/* Story Columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual card mimicking an Instagram layout */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-orange-400/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-white p-4 pb-6 rounded-2xl shadow-xl border border-orange-100/50 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Photo placeholder or elegant warm image representing GG's baking */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-orange-50 relative">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
                  alt="Artisan baker kneading dough in home kitchen"
                  className="w-full h-full object-cover grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-mono tracking-widest uppercase">
                  @ggsbakehouse
                </div>
              </div>

              {/* Instagram-style post feedback */}
              <div className="mt-4 px-1">
                <div className="flex items-center space-x-3 text-red-500 text-sm mb-2">
                  <span>♥️ 4,832 likes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-amber-800 font-sans text-xs">View all 192 comments</span>
                </div>
                <p className="font-sans text-xs leading-relaxed text-brand-brown/80">
                  <strong className="text-brand-brown">ggsbakehouse</strong> Tested our new Loch-Style shortbread parameters today! Smells like organic saffron & golden jaggery drops. Sign up is open on our priority list! ✨🌾 #artisanhomebakery
                </p>
              </div>
            </div>

            {/* Polaroid note tape charm decoration */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-50/90 py-1 px-8 rounded shadow text-[10px] font-mono uppercase tracking-widest text-brand-brown/70 border border-brand-gold/20 select-none">
              Homemade Premium
            </div>
          </div>

          {/* Personality Narrative Right Section */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Short personality-forward intro */}
            <blockquote className="border-l-4 border-terracotta pl-6 mb-8 italic text-lg sm:text-xl font-serif text-brand-brown/90 leading-relaxed">
              "GG's Bakehouse started as a passion project — late nights, warm ovens, and the obsession with getting every bite just right. We're a creator-run home bakery from Delhi, and everything we make is handcrafted in small batches, packed with intention, and made to be gifted or devoured."
            </blockquote>

            {/* GG's Philosophy Lists */}
            <div className="space-y-6">
              {STORIES.map((story, index) => (
                <div key={index} className="flex gap-4 items-start bg-white/40 hover:bg-white/80 p-5 rounded-2xl border border-orange-50/50 transition-all duration-300">
                  <div className="p-3 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    {icons[index]}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                      {story.tag}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-brand-brown mt-0.5 mb-1.5">
                      {story.title}
                    </h4>
                    <p className="font-sans text-sm text-brand-brown/80 leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Promise Section */}
        <div className="mt-20 px-8 py-10 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-brand-brown">Thoughtful Packaging / Slower Living</h3>
            <p className="font-sans text-sm text-brand-brown/70 mt-1 leading-relaxed">
              Every festive box or daily cookie batch is wrapped in sustainable jute fibers, sprinkled with loose dried blossoms, and handwritten with customized gift coordinates. A treat for you and yours.
            </p>
          </div>
          <div className="shrink-0 flex gap-4 text-xs font-mono tracking-widest text-brand-gold font-bold uppercase border-t md:border-t-0 md:border-l border-brand-gold/20 pt-4 md:pt-0 md:pl-8">
            <div className="text-center">
              <span className="block text-2xl font-serif text-brand-brown font-heavy mb-1">0%</span>
              <span className="text-brand-brown/60">Preservatives</span>
            </div>
            <div className="text-center border-l border-brand-gold/20 px-4">
              <span className="block text-2xl font-serif text-brand-brown font-heavy mb-1">100%</span>
              <span className="text-brand-brown/60">Hand-Packaged</span>
            </div>
            <div className="text-center border-l border-brand-gold/20 pl-4">
              <span className="block text-2xl font-serif text-brand-brown font-heavy mb-1">10-12</span>
              <span className="text-brand-brown/60">Drops / Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
