import React from "react";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/about/MissionStatement";
import CommunityInvolvement from "@/components/about/CommunityInvolvement";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import "../styles/_about.scss";


export default function AboutUs() {
  const heroTitle = "About Us";
  const heroBackgroundImage = "/lisa.jpg";

  return (
    <div>
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
