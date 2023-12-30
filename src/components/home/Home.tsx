// Home.js
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Sermons from "./Sermons";

export default function Home() {
  return (
    <div className="homePage">
      <Hero />
      <About />
      <div className="worship"></div>
      <Events />
      <div className="bible"></div>
      <Sermons />
    </div>
  );
}
