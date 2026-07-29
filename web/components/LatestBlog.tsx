"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "10 Best AI Tools in 2026",
    description:
      "Discover the most powerful AI tools that can boost your productivity.",
    date: "July 2026",
  },
  {
    title: "ChatGPT vs Claude vs Gemini",
    description:
      "A detailed comparison to help you choose the right AI assistant.",
    date: "July 2026",
  },
  {
    title: "How AI is Changing Work",
    description:
      "Learn how AI is transforming businesses and daily workflows.",
    date: "July 2026",
  },
];

export default function LatestBlog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Latest Blog
        </p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Learn About AI
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Read tutorials, comparisons, guides and AI news.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-blue-500"
          >
            <p className="text-sm text-blue-400">{post.date}</p>

            <h3 className="mt-4 text-2xl font-bold">
              {post.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {post.description}
            </p>

            <button className="mt-8 text-blue-400 hover:text-blue-300">
              Read More →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}