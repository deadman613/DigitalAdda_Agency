// app/about/page.jsx
import {
  Brain,
  Sparkles,
  Zap,
  Target,
  Shield,
  Rocket,
  Atom,
  Palette,
  BarChart3,
  Users,
  Globe,
  Lightbulb,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Full-page dark purple linear background */}
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-black to-purple-900" />

      <main className="min-h-screen text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          {/* HERO - Responsive */}
          <section className="mb-20 pt-10 text-center sm:mb-32 sm:pt-20">
            <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              We Are{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DigitalAdda
              </span>
              .
            </h1>
            <h2 className="mb-8 text-3xl font-bold text-purple-300 sm:text-4xl md:text-5xl lg:text-6xl">
              Your Growth Partner
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
              At DigitalAdda Agency, we are not just a digital marketing company
              — we are India’s next-generation AI + VR powered digital growth
              agency. We blend Artificial Intelligence and Virtual Reality
              marketing to create immersive, data-driven brand experiences that
              attract, engage, and convert faster than traditional marketing. We
              help businesses move beyond basic advertising by using smart
              automation, predictive analytics, and interactive VR experiences
              that make brands unforgettable.
            </p>
            <button className="mt-10 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-10 py-5 text-lg font-bold shadow-xl shadow-purple-700/40 ring-2 ring-purple-400/30 backdrop-blur-md transition hover:scale-105 hover:shadow-2xl hover:shadow-purple-600 sm:mt-12 sm:px-12 sm:py-6 sm:text-xl">
              Discover Our Story
            </button>
          </section>

          {/* QUOTE + DESCRIPTION - Responsive grid */}
          <section className="mb-24 grid gap-12 md:mb-40 md:grid-cols-2 md:gap-16">
            <div className="space-y-8">
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-linear-to-b from-purple-400 to-cyan-400" />
                <p className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  “We don’t just market brands,
                  <br />
                  <span className="text-purple-300"> We Engineer</span>
                  <br />
                  experiences.”
                </p>
              </div>
              <p className="text-lg text-gray-400 sm:text-xl">— Our Mantra</p>
            </div>

            <div className="flex flex-col justify-center space-y-6 text-base text-gray-300 sm:text-lg">
              <p>
                With AI as our engine and VR as our stage, we build futuristic
                marketing campaigns that are personalized, immersive, and
                performance-focused. From AI-powered ad targeting and chat
                automation to VR product demos and virtual showrooms, we help
                brands stand out in an overcrowded digital world.
              </p>
              <p>
                We don’t chase trends — we create smarter, faster, and more
                powerful ways for businesses to grow.
              </p>
            </div>
          </section>

          {/* PILLARS - Fully responsive grid */}
          <section className="py-16 sm:py-20">
            <h2 className="mb-12 text-center text-4xl font-black text-white sm:mb-20 sm:text-5xl md:text-6xl lg:text-7xl">
              The DigitalAdda Pillars
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="group rounded-3xl bg-white/5 p-8 text-center backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-purple-400/50 hover:shadow-2xl hover:shadow-purple-600/30"
                >
                  <div
                    className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${pillar.linear}`}
                  >
                    <pillar.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL TAGLINE - Responsive */}
          <section className="py-24 text-center sm:py-32">
            <h2 className="text-4xl font-black text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Building Powerful 
              <br />
              <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Business Success Stories
              </span>
            </h2>
          </section>
        </div>
      </main>
    </>
  );
}

const pillars = [
  {
    icon: Atom,
    title: "AI-Powered Strategy Development",
    desc: "Smart, data-driven marketing strategies powered by Artificial Intelligence to predict trends, target the right audience, and maximize ROI.",
    linear: "bg-linear-to-br from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "VR Experience Marketing",
    desc: "Immersive Virtual Reality campaigns that allow customers to experience your brand, product, or service in a fully interactive digital environment.",
    linear: "bg-linear-to-br from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Customer Intelligence & Behavior Analysis",
    desc: "Deep AI-based audience research, behavioral tracking, and personalized marketing funnels that convert leads into loyal customers.",
    linear: "bg-linear-to-br from-green-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Market Research & Digital Assessment",
    desc: "Comprehensive market analysis, competitor benchmarking, and digital audits to identify growth opportunities for your business.",
    linear: "bg-linear-to-br from-orange-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "Opportunity Mapping & Growth Planning",
    desc: "AI-backed opportunity analysis that validates business ideas, identifies high-performing channels, and builds scalable growth roadmaps.",
    linear: "bg-linear-to-br from-yellow-500 to-amber-500",
  },
  {
    icon: Globe,
    title: "Competitive Intelligence (CI)",
    desc: "Real-time tracking of competitors’ strategies, ads, content, and performance to keep your brand one step ahead.",
    linear: "bg-linear-to-br from-purple-600 to-indigo-600",
  },
];
