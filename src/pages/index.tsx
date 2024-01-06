import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Events from "@/components/home/Events";
import Sermons from "@/components/home/Sermons";
import '../styles/_home.scss';

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
