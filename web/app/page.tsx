import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeaturedTools from "../components/FeaturedTools";
import Categories from "../components/Categories";
import LatestBlog from "../components/LatestBlog";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <SearchBar />

      <FeaturedTools />

      <Categories />

      <LatestBlog />
    </main>
  );
}