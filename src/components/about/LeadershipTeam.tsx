import React from "react";

const LeadershipTeam = () => {
  return (
    <section>
      <h2>Leadership Team</h2>
      <p>
        Meet the dedicated individuals who lead Travis and Paulina&apos;s Church
        with passion and faith. Our leadership team is committed to guiding our
        congregation and serving our community.
      </p>
      <div className="leadership-list">
        {/* You can add individual leader profiles here */}
        <div className="leader-profile">
          <img src="leader1.jpg" alt="Leader 1" />
          <h3>Leader Name 1</h3>
          <p>Role or Position</p>
        </div>
        <div className="leader-profile">
          <img src="leader2.jpg" alt="Leader 2" />
          <h3>Leader Name 2</h3>
          <p>Role or Position</p>
        </div>
        {/* Add more leader profiles as needed */}
      </div>
    </section>
  );
};

export default LeadershipTeam;
