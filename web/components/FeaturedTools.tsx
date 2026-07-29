export default function FeaturedTools() {
  const tools = [
    {
      name: "ChatGPT",
      desc: "The world's most popular AI assistant.",
      icon: "🤖",
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Claude",
      desc: "Powerful AI for writing and coding.",
      icon: "🧠",
      color: "from-orange-400 to-red-500",
    },
    {
      name: "Gemini",
      desc: "Google's advanced AI assistant.",
      icon: "✨",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-14">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Featured
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
          Popular AI Tools
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore the best AI tools carefully selected for productivity,
          content creation and business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div
              className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${tool.color} text-3xl`}
            >
              {tool.icon}
            </div>

            <h3 className="text-2xl font-bold">{tool.name}</h3>

            <p className="mt-3 text-gray-400">{tool.desc}</p>

            <button className="mt-7 rounded-xl bg-blue-600 px-5 py-2 transition hover:bg-blue-700">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}