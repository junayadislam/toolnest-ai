export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between border-b border-gray-800 px-8 py-6">

        <h1 className="text-2xl font-bold tracking-wide">
          ToolNest <span className="text-blue-500">AI</span>
        </h1>

        <div className="hidden items-center gap-8 text-gray-300 md:flex">
          <a href="#" className="transition hover:text-white">
            AI Tools
          </a>

          <a href="#" className="transition hover:text-white">
            Categories
          </a>

          <a href="#" className="transition hover:text-white">
            Blog
          </a>

          <a href="#" className="transition hover:text-white">
            About
          </a>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 transition hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center px-6 py-28 text-center">

        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          ✨ AI Tools • Reviews • Guides
        </div>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Discover The Best
          <br />
          <span className="text-blue-500">
            AI Tools
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          Find powerful AI tools, honest reviews, step-by-step guides and
          carefully selected resources — all in one place.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-blue-600 px-7 py-3 transition hover:bg-blue-700">
            Explore AI Tools
          </button>

          <button className="rounded-xl border border-gray-700 px-7 py-3 transition hover:bg-gray-900">
            Read Blog
          </button>

        </div>

      </section>

    </main>
  );
}