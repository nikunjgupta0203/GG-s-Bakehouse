import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WaitlistSubmission } from "../types";
import { Mail, User, Sparkles, Send, Gift, Calendar } from "lucide-react";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [spotsClaimed, setSpotsClaimed] = useState(1482);

  useEffect(() => {
    // Read local storage to see if we already submitted
    const isDone = localStorage.getItem("gg_waitlist_joined") === "true";
    if (isDone) {
      setIsSubmitted(true);
    }

    // Set interactive initial spot claimed count or increment it subtly for charm
    const savedSubmissions = localStorage.getItem("gg_waitlist_submissions");
    if (savedSubmissions) {
      const parsed = JSON.parse(savedSubmissions);
      setSpotsClaimed(1482 + parsed.length);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please write down your beautiful name.");
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please provide a valid email handle so we can reach you.");
      return;
    }

    const newSubmission: WaitlistSubmission = {
      id: "sub_" + Math.random().toString(36).substring(2, 11),
      name: name.trim(),
      email: email.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save submission list in localStorage
    const savedSubmissions = localStorage.getItem("gg_waitlist_submissions");
    const currentList: WaitlistSubmission[] = savedSubmissions ? JSON.parse(savedSubmissions) : [];
    currentList.push(newSubmission);
    localStorage.setItem("gg_waitlist_submissions", JSON.stringify(currentList));

    // Flag joined state
    localStorage.setItem("gg_waitlist_joined", "true");
    
    // Simulate updating counter
    setSpotsClaimed((prev) => prev + 1);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    // For preview testing convenience, let the user re-trigger waitlist signup
    localStorage.removeItem("gg_waitlist_joined");
    setIsSubmitted(false);
    setName("");
    setEmail("");
  };

  return (
    <section id="waitlist" className="relative py-28 px-6 md:px-12 lg:px-24 bg-brand-brown text-white overflow-hidden">
      {/* Background radial gradient glow representing warm fireplace lighting */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[radial-gradient(circle_at_bottom,rgba(196,91,62,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-10 left-10 w-44 h-44 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-5 text-left">
            <span className="font-cursive text-3.5xl text-brand-gold block mb-3">Limited Batches Only</span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-bold leading-tight text-orange-50 mb-6">
              We're not open yet — but you can be first.
            </h2>
            <p className="font-sans text-sm text-amber-100/80 leading-relaxed mb-8 max-w-md">
              Because everything is small-batch, baked inside GG's private home workspace, drops sell out in mere hours. Joining the priority waitlist grants you a 24-hour private window and code before general public announcements.
            </p>

            {/* Micro value badges list */}
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-brand-gold">
                  <Gift className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs text-orange-100 font-medium font-bold">Free Butter-Cookie recipe card with sign-up</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-brand-gold">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs text-orange-100 font-medium font-bold">Private slots for Holi and Christmas collections</span>
              </div>
            </div>
          </div>

          {/* Form Card Right Column */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-terracotta text-white font-mono text-[9px] uppercase tracking-widest py-1 px-3.5 rounded-full shadow-md font-bold">
                Priority Index
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-serif text-2xl font-bold text-orange-50 mb-1.5 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" /> Reserve Your Priority Slot
                    </h3>
                    <p className="font-sans text-xs text-amber-100/60 mb-6">
                      Join {spotsClaimed.toLocaleString()} gourmet lovers across India already on the roster.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Input */}
                      <div className="relative">
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-amber-100/70 mb-1.5">
                          First Name
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-amber-100/40 pointer-events-none">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Ananya"
                            className="w-full pl-10 pr-4 py-3 bg-brand-brown/40 border border-white/15 rounded-xl text-white placeholder-white/35 font-sans text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-amber-100/70 mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-amber-100/40 pointer-events-none">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full pl-10 pr-4 py-3 bg-brand-brown/40 border border-white/15 rounded-xl text-white placeholder-white/35 font-sans text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                          />
                        </div>
                      </div>

                      {/* Error Alert Display */}
                      {error && (
                        <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-200 text-xs rounded-xl font-sans font-light">
                          ⚠️ {error}
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-xl bg-brand-gold hover:bg-yellow-500 text-brand-brown font-sans font-bold tracking-wider text-xs uppercase hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-brand-gold/15 cursor-pointer flex items-center justify-center gap-2 mt-4"
                      >
                        Save My Spot <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-6 flex flex-col items-center"
                  >
                    {/* Golden Circle Emblem */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-gold to-orange-400 p-[1px] mb-6 flex items-center justify-center">
                      <div className="w-full h-full bg-brand-brown rounded-full flex items-center justify-center text-brand-gold font-serif italic text-3xl font-bold font-serif shadow-inner">
                        🍪
                      </div>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-brand-gold mb-3">
                      You're on the list.
                    </h3>
                    <p className="font-serif italic text-lg text-orange-100 mb-6 font-medium leading-relaxed">
                      "We'll see you soon 🍪"
                    </p>

                    <div className="max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-sm text-left leading-relaxed text-amber-100/80">
                      <p className="font-sans mb-3 text-white text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> What happens next?
                      </p>
                      <p className="font-sans text-xs mb-2">
                        <strong>1. Check Inbox:</strong> We just dispatched an automated welcome letter carrying our original <em>Brown-Butter Cardamom Cookie</em> recipe card. Learn our baking secrets!
                      </p>
                      <p className="font-sans text-xs">
                        <strong>2. Priority Ping:</strong> 24 hours prior to our late Autumn launch drop, you will receive an exclusive SMS & Email containing your token key and priority link.
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-[10px] font-mono text-amber-100/40 hover:text-amber-100 underline uppercase tracking-widest cursor-pointer mt-2"
                    >
                      (Clear state to register another name)
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
