import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/home/About";
import Events from "@/components/home/Events";
import Sermons from "@/components/home/Sermons";
import '../styles/_home.scss';

export default function Home() {
  const heroTitle = "Welcome to Super Fe";
  const heroBackgroundImage = "/lisa.jpg";

  return (
    <div>
      <Hero
        title={heroTitle}
        backgroundImage={heroBackgroundImage}
      />
      {/* <About /> */}
      <div className="worship"></div>
      {/* <Events /> */}
      <div className="bible"></div>
      {/* <Sermons /> */}
    </div>
  );
}
