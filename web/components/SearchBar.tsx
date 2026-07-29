"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto -mt-10 max-w-5xl px-6 relative z-20"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

        <h2 className="mb-2 text-center text-3xl font-bold">
          Find Your Perfect AI Tool
        </h2>

        <p className="mb-8 text-center text-gray-400">
          Search from hundreds of carefully selected AI tools.
        </p>

        <div className="flex flex-col gap-4 md:flex-row">

          <div className="relative flex-1">

            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search AI tools..."
              className="w-full rounded-2xl border border-white/10 bg-[#0c1023] py-4 pl-14 pr-5 outline-none transition focus:border-blue-500"
            />

          </div>

          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-700">
            Search
          </button>

        </div>

      </div>
    </motion.section>
  );
}