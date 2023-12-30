import React from "react";
import MissionStatement from "@/components/about/MissionStatement";
import CommunityInvolvement from "@/components/about/CommunityInvolvement";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import "../styles/_home.scss";
import Hero1 from "@/components/about/Hero1";

export default function AboutUs() {
  return (
    <div className="about-us">
      <Hero1 />
      <div className="about-space">
        <MissionStatement />
        <div className="baptism"></div>
        <CommunityInvolvement />
        <div className="community"></div>
        <LeadershipTeam />
      </div>
    </div>
  );
}
