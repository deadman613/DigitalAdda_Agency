'use client';

import { ArrowRight, Bot, Zap, Brain, BarChart3, Sparkles, Globe, Target } from 'lucide-react';

const trends = [
  {
    number: '01',
    title: 'AI-Driven Marketing Evolution',
    desc: 'From predictive analytics to automated customer journeys, AI is transforming how businesses attract, engage, and convert customers.',
    icon: <Brain className="w-5 h-5 sm:w-6" />,
    linear: 'from-purple-600 to-pink-600',
  },
  {
    number: '02',
    title: 'VR-Powered Experiences',
    desc: 'Immersive VR interactions build trust and boost engagement across products and services.',
    icon: <Zap className="w-5 h-5 sm:w-6" />,
    linear: 'from-cyan-800 to-blue-800',
  },
  {
    number: '03',
    title: 'Hyper-Personalization',
    desc: 'Deliver real-time tailored content at scale using AI-driven behavioral insights.',
    icon: <Target className="w-5 h-5 sm:w-6" />,
    linear: 'from-emerald-600 to-teal-600',
  },
  {
    number: '04',
    title: 'Digital-First Behavior',
    desc: 'Meet customers where they are: online. Build discoverable, conversion-ready digital footprints.',
    icon: <Bot className="w-5 h-5 sm:w-6" />,
    linear: 'from-indigo-700 to-indigo-900',
  },
  {
    number: '05',
    title: 'Data-Backed Decisions',
    desc: 'Turn data into profit with deep analytics, forecasting, and actionable intelligence.',
    icon: <BarChart3 className="w-5 h-5 sm:w-6" />,
    linear: 'from-violet-600 to-purple-600',
  },
  {
    number: '06',
    title: 'Smart Content Automation',
    desc: 'Scale branding with AI-generated, consistent, and future-ready content.',
    icon: <Sparkles className="w-5 h-5 sm:w-6" />,
    linear: 'from-pink-600 to-rose-600',
  },
  {
    number: '07',
    title: 'Multi-Platform Dominance',
    desc: 'Dominate every channel—from SEO to social—with unified, AI-powered strategies.',
    icon: <Globe className="w-5 h-5 sm:w-6" />,
    linear: 'from-indigo-600 to-blue-600',
  },
  {
    number: '08',
    title: 'Conversion Optimization',
    desc: 'Turn visitors into buyers with AI heatmaps, A/B tests, and behavior analysis.',
    icon: <BarChart3 className="w-5 h-5 sm:w-6" />,
    linear: 'from-orange-600 to-red-600',
  }
];

export default function Homesection4() {
  return (
    <section className="relative w-full py-10 px-4 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e]">
      {/* Background Glows - repositioned for mobile safety */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-purple-800/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-pink-800/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-purple-400 text-[10px] xs:text-xs sm:text-sm font-medium tracking-widest uppercase mb-2">
          Unveiling Tomorrow's Big Trends
        </p>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight px-1">
          MEGA TRENDS
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-3 px-1">
          by DigitalAdda Agency
        </p>
        <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm md:text-base max-w-4xl mx-auto mb-5 px-2 leading-relaxed">
          Step into the future with DigitalAdda as we decode the Mega Trends shaping business, marketing, and customer experience.
        </p>
        <div className="w-16 xs:w-20 h-0.5 sm:w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50" />

        {/* Trends Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {trends.map((trend) => (
            <div
              key={trend.number}
              className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-md border border-purple-500/20
                         hover:border-purple-400/60 hover:bg-white/10 transition-all duration-500 cursor-pointer
                         shadow-md hover:shadow-lg"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700
                            bg-gradient-to-br ${trend.linear} -z-10`}
              />

              {/* Number + Icon */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl xs:text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {trend.number}
                </span>
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-white
                              bg-gradient-to-br ${trend.linear} shadow-sm`}
                >
                  {trend.icon}
                </div>
              </div>

              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                {trend.title}
              </h3>

              <p className="text-gray-300 text-[10px] xs:text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                {trend.desc}
              </p>

              <div className="flex justify-end">
                <ArrowRight className="w-4 h-4 sm:w-5 text-purple-400 group-hover:text-pink-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}