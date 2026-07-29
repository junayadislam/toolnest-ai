"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold">
              ToolNest <span className="text-blue-500">AI</span>
            </h2>

            <p className="mt-5 text-gray-400">
              Discover the world's best AI tools,
              tutorials and resources in one place.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">AI Tools</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Writing</li>
              <li>Image</li>
              <li>Video</li>
              <li>Coding</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 transition hover:bg-blue-700">
              Subscribe
            </button>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-14 border-t border-white/10 pt-8 text-center text-gray-500"
        >
          © 2026 ToolNest AI. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
}