import React from "react";
import MissionStatement from "@/components/about/MissionStatement";
import CommunityInvolvement from "@/components/about/CommunityInvolvement";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import '../styles/_about.scss';

const AboutUsPage: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to Travis and Paulina&apos;s Church</p>
      </div>
      <div className="mission-statement">
        <h2>Our Mission</h2>
        <MissionStatement />
      </div>
      <div className="community-involvement">
        <h2>Community Involvement</h2>
        <CommunityInvolvement />
      </div>
      <div className="leadership-team">
        <h2>Leadership Team</h2>
        <LeadershipTeam />
      </div>
    </section>
  );
};

export default AboutUsPage;
