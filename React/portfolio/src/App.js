import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="flex min-h-screen overflow-y-scroll">
      <BrowserRouter>
        <Navbar />
        <Routes element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
