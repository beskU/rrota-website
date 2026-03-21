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
    <div className="relative mx-auto w-full overflow-hidden font-inter">
      <Navbar />

      <main className="relative mt-10 w-full">
        <section className="mb-20 w-full">
          <Hero />
        </section>

        <section className="mb-20 w-full">
          <Why />
        </section>

        <section className="mb-20 w-full">
          <Graph />
        </section>

        <section className="mb-20 w-full">
          <Tokenomics />
        </section>

        <BlogPreview />

        <section className="mb-20 w-full">
          <HowTo />
        </section>

        <section className="mb-20 w-full">
          <Roadmap />
        </section>

        <section className="my-20 w-full">
          <AboutUs />
        </section>
      </main>

      <Footer />
    </div>
  );
}
