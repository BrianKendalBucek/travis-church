// Sermons.js
import React from "react";

export default function Sermons() {
  return (
    <section className="sermons">
      <h2>Sermones Recientes</h2>
      <div className="sermon-videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9gKgjR3xm7s?si=jK9p-pQZGnO7hqJL"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wi24ldmCiOw?si=B4gtnPrU26uveBCT"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AjKCS36q3aI?si=OnVhTmmRe5SPscV3"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
