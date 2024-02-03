import React from "react";
import Image from "next/image";
import styles from '../../styles/LeadershipTeam.module.scss';

export default function LeadershipTeam() {
  return (
    <section className={styles.leadershipTeam}>
      <h2 className={styles.aboutSpace}>Equipo de Liderazgo</h2>
      <p className={styles.briefDesc}>
        Conoce a las personas dedicadas que lideran la Iglesia de Travis y
        Paulina con pasión y fe. Nuestro equipo de liderazgo está comprometido
        en guiar a nuestra congregación y servir a nuestra comunidad.
      </p>
      <div className={styles.leadershipList}>
        <div className={styles.leaderProfile}>
          <Image src="/don.jpg" alt="Leader 1" width={300} height={300} />
          <h3>Pastor Travis Reid</h3>
        </div>
        <div className={styles.leaderProfile}>
          <Image src="/betty.jpg" alt="Leader 2" width={300} height={300} />
          <h3>Pastora Paulina Reid</h3>
        </div>
      </div>
    </section>
  );
}
