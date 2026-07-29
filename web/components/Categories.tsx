"use client";

import { motion } from "framer-motion";

const categories = [
  { icon: "✍️", title: "Writing" },
  { icon: "🎨", title: "Image" },
  { icon: "🎥", title: "Video" },
  { icon: "💻", title: "Coding" },
  { icon: "📈", title: "Marketing" },
  { icon: "🎵", title: "Audio" },
  { icon: "📊", title: "Productivity" },
  { icon: "🤖", title: "Chatbots" },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Categories
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
          Browse by Category
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Explore AI tools by category and discover the perfect solution for
          your workflow.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-blue-500 hover:bg-white/10"
          >
            <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
              {category.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {category.title}
            </h3>

            <p className="mt-3 text-gray-400">
              Discover the best {category.title.toLowerCase()} AI tools.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}