import React from "react";
import styles from "../../styles/CommunityInvolvement.module.scss";

export default function CommunityInvolvement() {
  return (
    <section className={styles.communityInvolvement}>
      <h2>Community Involvement</h2>
      <div className={styles.columns}>
        <p className={styles.column}>
          At Travis and Paulina&apos;s Church, we are deeply committed to
          serving our local community. We believe in making a positive impact on
          the lives of those around us.
        </p>
        <p className={styles.column}>
          Our community involvement initiatives include volunteering, charity
          drives, and outreach programs. We work together to bring hope and
          support to those in need.
        </p>
      </div>
    </section>
  );
}
