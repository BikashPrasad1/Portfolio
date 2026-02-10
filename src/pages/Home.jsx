import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

/* ================================
   Home Page
================================ */
export default function HomePage() {
  return (
    <>
      {/* Hero owns strong visuals */}
      <Hero />

      {/* Content Sections */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}
