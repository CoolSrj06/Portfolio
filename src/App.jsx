import { BrowserRouter } from "react-router-dom";
import { HomeSection } from "./components/HomeSection";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { SocialsSection } from "./components/SocialsSection";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#161F26] text-[#C8CACD] h-full w-full font-body" >
        <Navbar />
        <HomeSection />
        <SocialsSection />
        <Skills />
        <Works />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </BrowserRouter>
  );
}

export default App;
