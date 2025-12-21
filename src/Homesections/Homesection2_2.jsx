"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Replace this with your actual 18 brand objects
const brands = [
  { id: 1, name: "Blumera", src: "/brands/1.png" },
  { id: 2, name: "CUET-Adda", src: "/brands/2.png" },
  { id: 3, name: "DesigningVidya", src: "/brands/3.png" },
  { id: 4, name: "DigitalAdda", src: "/brands/4.png" },
  { id: 5, name: "Digiwarms", src: "/brands/5.png" },
  { id: 6, name: "DigitalAdda", src: "/brands/6.png" },
  { id: 7, name: "Economics With Gulshan Sir", src: "/brands/7.png" },
  { id: 8, name: "FACT Education", src: "/brands/8.png" },
  { id: 9, name: "Hacking Vidya", src: "/brands/9.png" },
  { id: 10, name: "IIDAD", src: "/brands/10.png" },
  { id: 11, name: "LawPrep", src: "/brands/11.png" },
  { id: 12, name: "Legal Adda", src: "/brands/12.png" },
  { id: 13, name: "NIDADS", src: "/brands/13.png" },
  { id: 14, name: "NIFASE", src: "/brands/14.png" },
  { id: 15, name: "NIGAPE", src: "/brands/15.png" },
  { id: 16, name: "NIHACS", src: "/brands/16.png" },
  { id: 17, name: "NIMLACC", src: "/brands/17.png" },
  { id: 18, name: "Shalini Vashisht", src: "/brands/18.png" },
];

export default function BrandShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 8px 30px rgba(120, 119, 198, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #0f0020 0%, transparent 40%), radial-gradient(circle at bottom right, #0f0f1e 0%, #020617 100%)",
      }}
    >
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 w-64 h-64 rounded-full bg-indigo-600/10 blur-2xl" />
        <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-purple-600/10 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trusted by Ambitious Brands
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            We partner with visionary teams to build scalable, high-impact solutions that drive real growth.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6"
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group flex items-center justify-center p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5"
                >
                  <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center relative overflow-hidden rounded-md">
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-transform duration-300 transform group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}