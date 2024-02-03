import React from "react";
import styles from "../../styles/MissionStatement.module.scss";

export default function MissionStatement() {

  const classNames = `${styles.missionStatement} ${styles.missionStatementBriefDesc}`;

  return (
    <div className={classNames}>
      <p>
        At Travis and Paulina&apos;s Church, our mission is to spread the love and
        teachings of Jesus Christ to all corners of the world. We are committed
        to fostering a community of faith, hope, and love where individuals and
        families can find spiritual growth and transformation.
      </p>
      <p>
        We believe in the power of prayer, the importance of biblical
        teachings, and the value of serving others. Our church is a place where
        you can experience God&apos;s presence, build meaningful relationships, and
        make a positive impact on the world around you.
      </p>
      <p>
        Join us on this journey of faith as we strive to make a difference in
        our community and beyond. Together, we can live out the message of love,
        compassion, and redemption exemplified by Jesus Christ.
      </p>
    </div>
  );
}
