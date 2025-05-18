import { BrowserRouter } from "react-router-dom";
import { HomeSection } from "./components/HomeSection";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { SocialsSection } from "./components/SocialsSection";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProjectsSection } from "./components/ProjectsSection";
import { Certifications } from "./components/Certifications";

function App() {
  return (
    <section className="srj_portfolio_section bg-slate-900 text-[#C8CACD] h-full w-full font-body">
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <Skills />
        <ProjectsSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </section>
  );
}

export default App;
