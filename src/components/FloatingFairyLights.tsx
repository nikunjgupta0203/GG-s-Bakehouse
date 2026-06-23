import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Light {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  glowColor: string;
}

export default function FloatingFairyLights() {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    // Generate fairy lights with random offsets, sizes, and delays
    const newLights: Light[] = Array.from({ length: 18 }).map((_, i) => {
      const colors = ["rgba(253, 224, 71, 0.6)", "rgba(251, 146, 60, 0.4)", "rgba(217, 119, 6, 0.5)", "rgba(254, 215, 170, 0.5)"];
      return {
        id: i,
        x: Math.random() * 100, // percentage x width
        y: Math.random() * 80 + 10, // percentage height
        size: Math.random() * 8 + 4, // 4px to 12px
        duration: Math.random() * 15 + 10, // 10s to 25s for slow drifting
        delay: Math.random() * -15, // pre-start so they don't fade in all at once
        glowColor: colors[i % colors.length],
      };
    });
    setLights(newLights);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Decorative vertical wire representation mimicking fairy lights draped from top */}
      <svg className="absolute top-0 left-0 w-full h-[150px] opacity-15 stroke-brand-gold fill-none hidden md:block">
        <path d="M-10,20 Q 200,80 400,20 T 800,40 T 1200,15 T 1600,60 T 2000,20" strokeWidth="1" strokeDasharray="2,2" />
        <path d="M-10,40 Q 250,110 500,40 T 1000,60 T 1500,30 T 2000,70" strokeWidth="0.5" strokeDasharray="1,3" />
      </svg>

      {/* Floating glowing bulbs */}
      {lights.map((light) => {
        const floatAnimation = {
          y: [
            `${light.y}%`,
            `${light.y - (Math.random() * 25 + 15)}%`,
            `${light.y}%`
          ],
          x: [
            `${light.x}%`,
            `${light.x + (Math.random() * 10 - 5)}%`,
            `${light.x}%`
          ],
          opacity: [0.3, 0.9, 0.3],
          scale: [0.9, 1.2, 0.9],
        };

        return (
          <motion.div
            key={light.id}
            className="absolute rounded-full pointer-events-none mix-blend-screen"
            style={{
              left: `${light.x}%`,
              top: `${light.y}%`,
              width: light.size,
              height: light.size,
              backgroundColor: light.glowColor,
              boxShadow: `0 0 ${light.size * 2}px ${light.size / 2}px ${light.glowColor}, 0 0 ${light.size * 4}px ${light.size / 1.5}px rgba(251, 146, 60, 0.3)`,
            }}
            animate={floatAnimation}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: light.delay,
            }}
          />
        );
      })}

      {/* Sparkling stars / twinkling motes */}
      <div className="absolute bottom-10 left-[10%] w-2 h-2 rounded-full bg-amber-200 animate-pulse blur-xs opacity-60" />
      <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-orange-300 animate-ping opacity-20 duration-1000" />
      <div className="absolute top-[45%] left-[25%] w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-pulse duration-700" />
      <div className="absolute bottom-[30%] right-[30%] w-2 h-2 rounded-full bg-amber-100 opacity-50 animate-pulse duration-1000" />
    </div>
  );
}
