import React from "react";
import Navbar from "./sections/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
