import React from "react";
import Image from "next/image";

export default function LeadershipTeam() {
  return (
    <section className="leadership-team">
      <h2 className="about-space">Equipo de Liderazgo</h2>
      <p className="brief-desc">
        Conoce a las personas dedicadas que lideran la Iglesia de Travis y
        Paulina con pasión y fe. Nuestro equipo de liderazgo está comprometido
        en guiar a nuestra congregación y servir a nuestra comunidad.
      </p>
      <div className="leadership-list">
        <div className="leader-profile">
          <Image className="leader-profile-img" src="/don.jpg" alt="Leader 1" width={300} height={300} />
          <h3>Pastor Travis Reid</h3>
        </div>
        <div className="leader-profile">
          <Image className="leader-profile-img" src="/betty.jpg" alt="Leader 2" width={300} height={300} />
          <h3>Pastora Paulina Reid</h3>
        </div>
      </div>
    </section>
  );
}
