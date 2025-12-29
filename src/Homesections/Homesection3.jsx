"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Unlock, Sparkles, TrendingUp, Award } from "lucide-react";

const STATS = [
  {
    value: 500,
    label: "Successful Projects",
    format: (v) => `${Math.floor(v)}+`,
    final: "500+",
    duration: 2000,
  },
  {
    value: 350,
    label: "Satisfied Clients",
    format: (v) => `${Math.floor(v)}+`,
    final: "350+",
    duration: 2000,
  },
  {
    value: 5,
    label: "Years of Experience",
    format: (v) => `${Math.floor(v)}+`,
    final: "5+",
    duration: 1500,
  },
];

const BENEFITS = [
  "100% transparent work process with real-time reporting",
  "24/7 customer support to assist you anytime.",
  "Proven expertise in SEO, Social Media, Google Ads, and Branding",
];

const CLIENTS = [
  "NIMLACC",
  "iidad",
  "NIGAPE",
  "NIDAD",
  "NIFASE",
  "Designing Vidya",
  "Hacking Vidya",
  "Law Prep",
  "Fact Education",
  "Blumera",
  "nihacs",
  "CUET ADDA",
  "Dizital Adda",
  "Digiwarms",
  "Legal Adda",
  "Economics with Gulshan Sir",
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple-400/20"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animation: `float ${Math.random() * 10 + 15}s linear infinite`,
            animationDelay: Math.random() * 5 + "s",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const animatedRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!ref.current || animatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const span = ref.current.querySelector("span");
          const startTime = Date.now();
          const duration = stat.duration;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = stat.value * easeOutQuart;

            if (progress < 1) {
              span.textContent = stat.format(current);
              requestAnimationFrame(animate);
            } else {
              span.textContent = stat.final;
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat]);

  const icons = [Award, TrendingUp, Sparkles];
  const Icon = icons[index];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-transparent backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
      style={{
        willChange: "transform",
      }}
    >
      {/* Glow effect - simplified */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10" />

      {/* Icon */}
      <div className="relative mb-4 inline-block">
        <Icon className="relative w-12 h-12 mx-auto text-purple-300 group-hover:text-pink-300 transition-colors duration-300" style={{ willChange: "color" }} />
      </div>

      {/* Number */}
      <h2 className="relative text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-pink-200 mb-2 group-hover:scale-110 transition-transform duration-300" style={{ willChange: "transform" }}>
        <span>{stat.final}</span>
      </h2>
      
      {/* Label */}
      <p className="relative text-purple-200 text-base sm:text-lg font-medium group-hover:text-white transition-colors duration-300">
        {stat.label}
      </p>

      {/* Corner accents */}
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-purple-400/40 rounded-tr-2xl group-hover:border-pink-400/60 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-purple-400/40 rounded-bl-2xl group-hover:border-pink-400/60 transition-colors duration-300" />
    </div>
  );
}

export default function MarketIntelligenceSection() {
  return (
    <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-gradient-to-br from-[#0a0015] via-[#1a0033] to-[#0f0f1e]">
      {/* Floating particles - reduced count */}
      <FloatingParticles />

      {/* Glowing orbs - reduced */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20 relative">
          <div className="inline-block relative mb-6">
            <Sparkles className="absolute -left-8 -top-2 w-6 h-6 text-purple-400 animate-pulse" />
            <Sparkles className="absolute -right-8 -top-2 w-6 h-6 text-pink-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <h3 className="text-purple-400 text-sm tracking-[0.3em] uppercase font-bold relative">
              Market Intelligence & Growth
            </h3>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight mb-6">
            YOUR TRUSTED
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              PARTNER
            </span>
          </h1>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full shadow-lg shadow-purple-500/50" />
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start mb-16">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/10 via-purple-900/20 to-transparent backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]" style={{ willChange: "transform" }}>
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              
              <p className="text-gray-100 text-lg leading-relaxed mb-8 relative">
                  At <span className="text-purple-300 font-semibold">DigitalAdda Agency</span>, we are your trusted partner in building
                  powerful digital success. We deliver <span className="text-pink-300 font-semibold">result-driven marketing
                  strategies</span> that help brands grow faster and smarter. Our expert
                  team works with 100% transparency, 24/7 support, and a 95%
                  client satisfaction rate to ensure your business stays ahead of
                  the competition.
              </p>
              
              <ul className="space-y-5">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4 group/item">
                    <ArrowRight className="w-6 h-6 text-purple-400 group-hover/item:text-pink-400 group-hover/item:translate-x-1 transition-all duration-300" style={{ willChange: "transform, color" }} />
                    <span className="text-gray-100 text-base group-hover/item:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-blue-600/20 backdrop-blur-sm border-2 border-purple-400/50 text-center hover:scale-105 transition-transform duration-300 overflow-hidden" style={{ willChange: "transform" }}>
              {/* Icon */}
              <div className="relative mb-6 inline-block">
                <Unlock className="relative w-20 h-20 mx-auto text-purple-200 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <p className="relative text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                Unlock new opportunities
                <br />
                <span className="text-3xl">with our analysis.</span>
              </p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/10 via-purple-900/20 to-transparent backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-3 gap-4">
              {CLIENTS.map((client) => (
                <div
                  key={client}
                  className="group/logo relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center text-sm font-semibold text-white hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-white/10 hover:border-purple-400/50"
                  style={{ willChange: "transform" }}
                >
                  <span className="relative">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate3d(10px, -20px, 0);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}