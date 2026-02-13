import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
