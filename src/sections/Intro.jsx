import React from "react";
import IntroText from "../components/IntroText";

const Intro = () => {
  return (
    <div>
      <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <img
          src="galaxy.jpg"
          alt="background-image"
          className="fixed inset-0 w-full h-full top-0 object-cover -z-10 opacity-50"
        />
        <IntroText />
      </section>
    </div>
  );
};

export default Intro;
