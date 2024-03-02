import React from "react";

const videoUrls = [
  "https://www.youtube.com/embed/9gKgjR3xm7s?si=jK9p-pQZGnO7hqJL",
  "https://www.youtube.com/embed/wi24ldmCiOw?si=B4gtnPrU26uveBCT",
  "https://www.youtube.com/embed/AjKCS36q3aI?si=OnVhTmmRe5SPscV3",
];

export default function Sermons() {
  return (
    <section className="sermons">
      <h2>Sermones Recientes</h2>
      <div className="sermon-videos">
        {videoUrls.map((url, index) => (
          <iframe
            key={index}
            src={url}
            title={`YouTube video player ${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </section>
  );
}
