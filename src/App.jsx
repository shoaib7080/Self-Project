import React from "react";
import Navbar from "./sections/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
};

export default App;
