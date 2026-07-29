"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-md"
        >
          ✨ AI Tools • Reviews • Guides
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Discover The Best
          <br />

          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            AI Tools
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .25 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400"
        >
          Find powerful AI tools, honest reviews, step-by-step guides,
          comparisons and carefully selected resources — all in one place.
        </motion.p>
        {/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
>
  <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700">
    🚀 Explore AI Tools
  </button>

  <button className="rounded-xl border border-gray-700 px-8 py-3 font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-white/5">
    📖 Read Blog
  </button>
</motion.div>

{/* Live Stats */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-14 grid grid-cols-3 gap-8 text-center"
>
  <div>
    <h2 className="text-3xl font-bold text-blue-400">500+</h2>
    <p className="mt-2 text-gray-400">AI Tools</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-blue-400">100+</h2>
    <p className="mt-2 text-gray-400">Guides</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-blue-400">50+</h2>
    <p className="mt-2 text-gray-400">Reviews</p>
  </div>
</motion.div>

      </div>

    </section>
  );
}