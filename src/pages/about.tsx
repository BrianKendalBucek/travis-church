import React from "react";
import MissionStatement from "@/components/about/MissionStatement";
import CommunityInvolvement from "@/components/about/CommunityInvolvement";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import "../styles/_hero.scss";
import "../styles/_about.scss";
import "../styles/_home.scss";

import Hero from "@/components/Hero";

export default function AboutUs() {
  const heroTitle = "About Us";
  const heroBackgroundImage = "/lisa.jpg";

  return (
    <div className="about-us">
      <Hero title={heroTitle} backgroundImage={heroBackgroundImage} />
      {/* <div className="about-space"> */}
      <MissionStatement />
      <div className="baptism"></div>
      <CommunityInvolvement />
      <div className="community"></div>
      <LeadershipTeam />
      {/* </div> */}
    </div>
  );
}
