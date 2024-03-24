import React from "react";

// FIX
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section className='hero' style={heroStyle}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
};

export default Hero;
