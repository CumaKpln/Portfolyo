import React from "react";
import "./tailwind.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="bg-slate-600">
      <Headers />

      <Element name="home">
        <Home />
      </Element>

      <Element name="aboutme">
        <AboutMe />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="works">
        <Works />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
