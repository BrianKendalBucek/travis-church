// Events.js
import React from "react";

export default function Events() {
  return (
    <section className="events">
      <h2>Próximos Eventos</h2>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&src=YmJ1Y2VrQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MDk1Mjg1MDUyMjQyNjQzMjI1NDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%2333B679&color=%23D50000"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
      ></iframe>
    </section>
  );
}
