"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, Unlock } from "lucide-react";

const STATS = [
  {
    value: 100,
    label: "Successful Projects",
    format: (v) => `${Math.floor(v / 1e9)}`,
    final: "500+ ",
    duration: 200,
  },
  {
    value: 100,
    label: "satisfied clients",
    format: (v) => `${Math.floor(v).toLocaleString()}+`,
    final: "350+",
    duration: 2000,
  },
  {
    value: 10,
    label: "Years of industry experience ",
    format: (v) => `${Math.floor(v).toLocaleString()}+`,
    final: "5+",
    duration: 2000,
  },
];

const BENEFITS = [
  "100% transparent work process with real-time reporting",
  " 24/7 customer support to assist you anytime.",
  " Proven expertise in SEO, Social Media, Google Ads, and Branding",
];

const CLIENTS = [
  "Google",
  "NVIDIA",
  "McKinsey",
  "Pfizer",
  "Deloitte",
  "Samsung",
  "BOSCH",
  "SONY",
  "UPS",
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const animatedRef = useRef(false);

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
      { threshold: 0.7 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <div
      ref={ref}
      className="group relative text-center  sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-purple-500/40 hover:border-purple-400 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10" />
      <h2 className="text-5xl sm:text-6xl  md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-purple-300">
        <span>{stat.final}</span>
      </h2>
      <p className="text-purple-100 text-base sm:text-lg mt-4 font-medium">
        {stat.label}
      </p>
    </div>
  );
}

export default function MarketIntelligenceSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-6 overflow-hidden bg-linear-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-72 sm:w-96 h-72 sm:h-96 bg-purple-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-purple-400 text-xs sm:text-sm tracking-widest uppercase mb-4">
            Market Intelligence & Growth
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight">
            YOUR TRUSTED PARTNER
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-lg shadow-purple-500/80" />
        </header>

        {/* Stats Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Content Grid - Fully Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mt-12 sm:mt-16">
          {/* Benefits Section */}
          <div className="space-y-8 sm:space-y-10">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-purple-500/40">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
                At DigitalAdda Agency, we are your trusted partner in building
                powerful digital success. we deliver result-driven marketing
                strategies that help brands grow faster and smarter. Our expert
                team works with 100% transparency, 24/7 support, and a 95%
                client satisfaction rate to ensure your business stays ahead of
                the competition. From startups to established brands, we are
                committed to delivering real growth with real results.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 shrink-0" />
                    <span className="text-gray-100 text-sm sm:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 sm:p-12 rounded-3xl bg-linear-to-br from-purple-600/40 to-pink-600/30 backdrop-blur-2xl border-2 border-purple-400 text-center">
              <Unlock className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-purple-300" />
              <p className="text-xl sm:text-2xl font-bold bg-linear-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Unlock new opportunities with our analysis.
              </p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-purple-500/40">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {CLIENTS.map((client) => (
                <div
                  key={client}
                  className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4 text-center text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-300"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
