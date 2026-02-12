import BlogPreview from "./components/blog-preview";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Why from "./components/why";
import Graph from "./components/graph";
import Tokenomics from "./components/tokenomics";
import Footer from "./components/footer";
import HowTo from "./components/howTo";
import Roadmap from "./components/roadmap";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <div className="relative w-full mx-auto overflow-hidden font-inter">
      <Navbar />
      <div className="relative w-full mt-10">
        <section className="w-full mb-20">
          <Hero />
        </section>

        <section className="w-full mb-20">
          <Why />
        </section>

        <section className="w-full mb-20">
          <Graph />
        </section>

        <section className="w-full mb-20">
          <Tokenomics />
        </section>

        {/* ✅ Blog preview inserted here */}
        <BlogPreview />

        <section className="w-full mb-20">
          <HowTo />
        </section>

        <section className="w-full mb-20">
          <Roadmap />
        </section>

        <section className="w-full my-20">
          <AboutUs />
        </section>
      </div>
      <Footer />
    </div>
  );
}
