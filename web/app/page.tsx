export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-blue-400 font-semibold mb-3">
          🚀 Welcome to
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          ToolNest AI
        </h1>

        <p className="mt-6 max-w-xl text-gray-400 mx-auto text-lg">
          Discover the best AI tools, tutorials and resources in one place.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            Explore AI Tools
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-900 transition">
            Read Blog
          </button>
        </div>
      </div>
    </main>
  );
}