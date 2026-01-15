"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  { id: 1, name: "Blumera", src: "/brands/1.png" },
  { id: 2, name: "CUET-Adda", src: "/brands/2.png" },
  { id: 3, name: "DesigningVidya", src: "/brands/3.png" },
  { id: 4, name: "DigitalAdda", src: "/brands/4.png" },
  { id: 5, name: "Digiwarms", src: "/brands/5.png" },
  { id: 6, name: "DigitalAdda II", src: "/brands/6.png" },
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

// Inverted triangle: widest at top → narrow at bottom
// Pattern: [6, 5, 4, 3] = 18 items
const getInvertedRows = (items) => {
  const pattern = [6, 5, 4, 3];
  const rows = [];
  let index = 0;
  for (const count of pattern) {
    const row = items.slice(index, index + count);
    if (row.length > 0) rows.push(row);
    index += count;
  }
  return rows;
};

export default function BrandShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1.2,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
    // hover: {
    //   scale: 1.15,
    //   y: -8,
    //   transition: { duration: 0.25, ease: "easeOut" },
    // },
  };

  const rows = getInvertedRows(brands);

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-20 px-4 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #0f0020 0%, transparent 40%), radial-gradient(circle at bottom right, #0f0f1e 0%, #020617 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-72 h-72 rounded-full bg-indigo-600/8 opacity-10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-purple-600/10 opacity-15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trusted by Ambitious Brands
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            We partner with visionary teams to build scalable, high-impact solutions.
          </p>
        </motion.div>

        {/* Inverted Triangle Layout */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center gap-6 sm:gap-8 mt-8"
        >
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex justify-center flex-wrap gap-4 sm:gap-6 w-full"
            >
              {row.map((brand) => (
                <motion.img
                  key={brand.id}
                  src={brand.src}
                  alt={brand.name}
                  variants={itemVariants}
                  whileHover="hover"
                  className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                  loading="lazy"
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}