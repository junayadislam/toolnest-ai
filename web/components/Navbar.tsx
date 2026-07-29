export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800/50 bg-[#050816]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide">
          ToolNest <span className="text-blue-500">AI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-gray-300 md:flex">
          <a href="#" className="transition hover:text-blue-400">
            AI Tools
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Categories
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Blog
          </a>

          <a href="#" className="transition hover:text-blue-400">
            About
          </a>
        </div>

        {/* CTA Button */}
        <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium transition hover:scale-105 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}