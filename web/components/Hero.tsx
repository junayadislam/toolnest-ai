export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="mx-auto max-w-5xl">

        <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          ✨ AI Tools • Reviews • Guides
        </div>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Discover The Best
          <br />
          <span className="text-blue-500">
            AI Tools
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Find powerful AI tools, honest reviews, step-by-step guides,
          and carefully selected resources — all in one place.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-7 py-3 font-medium transition hover:scale-105 hover:bg-blue-700">
            Explore AI Tools
          </button>

          <button className="rounded-xl border border-gray-700 px-7 py-3 font-medium transition hover:bg-gray-900">
            Read Blog
          </button>
        </div>

      </div>
    </section>
  );
}