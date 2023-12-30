import React from "react";
import "../styles/_home.scss";

export default function Home() {
  return (
    <>
      <div className="homePage">
        <section className="hero">
          <h2>Bienvenidos a Super Fe</h2>
          {/* <p>Únete a nosotros en nuestro camino de fe</p> */}
        </section>

        <section className="about">
          <h2>Acerca de Nuestra Iglesia</h2>
          <p>
            En la iglesia de Super Fe, nuestra misión es empoderar a individuos
            y familias para caminar en fe y vivir una vida transformada por la
            Palabra de Dios. Nos dedicamos a difundir el Evangelio de
            Jesucristo, fortalecer nuestra comunidad con la enseñanza bíblica y
            fomentar una relación personal y activa con Dios. Nos comprometemos
            a ser un faro de esperanza y amor, extendiendo un mensaje de gracia,
            sanación y redención. Unimos esfuerzos para impactar positivamente
            en nuestro entorno, promoviendo la paz, la justicia y la compasión.
            Somos una familia de creyentes en busca constante de una comprensión
            más profunda del poder transformador de la Palabra de Dios.
          </p>
        </section>

        <div className="worship"></div>

        <section className="events">
          <h2>Próximos Eventos</h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&src=YmJ1Y2VrQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MDk1Mjg1MDUyMjQyNjQzMjI1NDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%2333B679&color=%23D50000"
            style={{ border: "solid 1px #777" }}
            width="800"
            height="600"
          ></iframe>
        </section>

        <div className="bible"></div>

        {/* Sermons Section */}
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
      </div>
    </>
  );
}
