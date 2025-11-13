"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Page() {
  const [open, setOpen] = useState(null);

  const services = useMemo(
    () => [
      { key: "vita", title: "Vita Easy Shade", img: "/img/services/vitah.jpg", blurb: "Determinación digital del color dental con precisión profesional." },
      { key: "cerec", title: "CEREC", img: "/img/services/cerech.jpg", blurb: "Reconstrucciones dentarias en porcelana en un solo día." },
      { key: "cirugias", title: "Cirugías Guiadas", img: "/img/services/guiadah.jpg", blurb: "Implantes con la máxima precisión mediante planificación digital." },
      { key: "coronas", title: "Coronas Dentales", img: "/img/services/coronas.jpg", blurb: "Restauraciones duraderas y altamente estéticas." },
      { key: "implantes", title: "Implantes Straumann", img: "/img/services/imp.jpg", blurb: "Solución confiable y duradera para reemplazar dientes perdidos." },
      { key: "blanqueamiento", title: "Blanqueamiento Philips Zoom", img: "/img/services/philips.jpg", blurb: "Dientes más blancos en una sola sesión profesional." },
      { key: "invisalign", title: "Ortodoncia Transparente", img: "/img/services/invisalign.jpg", blurb: "Alineadores cómodos, removibles y casi invisibles." },
    ],
    []
  );

  const smoothTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector(".navbar-fixed-top, .navbar, .site-header, header");
    const h = header?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - h - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = decodeURIComponent(a.getAttribute("href") || "").slice(1);
      if (!id) return;
      if (document.getElementById(id)) {
        e.preventDefault();
        smoothTo(id);
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [smoothTo]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <section id="hicare-top-sec" className="hicare-template">
        <div className="container">
          <div className="row">
            <div className="contact-info pull-left">
              <ul>
                <li>Nuestros Horarios: Lunes a Viernes - 9:00 - 19:30 hs.</li>
              </ul>
            </div>
            <div className="phone-number">
              <ul>
                <li>
                  <a href="mailto:info@dentalcrew.com.ar" target="_blank" rel="noreferrer" style={{ marginRight: "5px" }}>
                    <Image src="/img/social/mail.png" alt="mail" width={25} height={25} />
                  </a>
                  <a href="https://www.facebook.com/dental.crew73" target="_blank" rel="noreferrer" style={{ marginRight: "5px" }}>
                    <Image src="/img/social/facebook.png" alt="facebook" width={25} height={25} />
                  </a>
                  <a href="https://www.instagram.com/dental.crew/" target="_blank" rel="noreferrer">
                    <Image src="/img/social/instagram.png" alt="instagram" width={25} height={25} />
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dentalcrew.com.ar" target="_blank" rel="noreferrer">
                    <i className="fa fa-envelope" />
                    info@dentalcrew.com.ar
                  </a>
                </li>
                <li>
                  <p>Tel: (011) 7079-2121&nbsp;&nbsp;&nbsp;</p>
                </li>
                <div className="clear" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Header />
      <Hero />

      <Services services={services} setOpen={setOpen} />
      <About />

      <Contact />



      <Footer />

      <Modal open={open === "cerec"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/cerech.jpg"
              alt="CEREC"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="modal-text">
            <h2>CEREC – Coronas en el día</h2>
            <p>Con la tecnología CEREC se pueden reconstruir en porcelana las piezas dentarias dañadas. Puentes, coronas, carillas e incrustaciones se realizan en un mismo día, priorizando función y estética.</p>
            <p>El tratamiento se hace en tres pasos: obtención de imagen digital, diseño asistido y tallado inmediato en porcelana pura. En 15 minutos la pieza está lista para cementar.</p>
            <p>La precisión es muy superior a la realizada manualmente y las piezas son altamente estéticas, libres de metal.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20CEREC" className="readmore" target="_blank" rel="noopener noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === "vita"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/vitah.jpg"
              alt="VITA Easy Shade"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="modal-text">
            <h2>Vita Easy Shade</h2>
            <p>VITA Easyshade® V permite determinar de forma digital el color exacto del diente en segundos, asegurando resultados precisos y reproducibles. Junto con VITA mobileAssist, se pueden documentar y compartir datos de color de manera profesional.</p>
            <p>Ideal para restauraciones estéticas de alta precisión.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20Vita%20Easy%20Shade" className="readmore" target="_blank" rel="noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === "cirugias"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/guiadah.jpg"
              alt="Cirugías Guiadas"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="modal-text">
            <h2>Cirugías Guiadas</h2>
            <p>La cirugía guiada por computadora es la técnica más precisa y segura para la colocación de implantes dentales. Permite planificar digitalmente la posición exacta del implante, reduciendo tiempos y mejorando resultados funcionales y estéticos.</p>
            <p>El procedimiento es mínimamente invasivo y en muchos casos se realiza en el día.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20Cirugías%20Guiadas" className="readmore" target="_blank" rel="noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === "coronas"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/coronas.jpg"
              alt="Coronas Dentales"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="modal-text">
            <h2>Coronas Dentales</h2>
            <p>Las coronas dentales permiten restaurar piezas gravemente dañadas, devolviendo forma, función y estética. Se fabrican con materiales de alta durabilidad y apariencia natural, ofreciendo una solución a largo plazo.</p>
            <p>En muchos casos pueden realizarse en el día con tecnología CEREC.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20Coronas%20Dentales" className="readmore" target="_blank" rel="noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === "implantes"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/imp.jpg"
              alt="Implantes Straumann"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="modal-text">
            <h2>Implantes Straumann</h2>
            <p>Los implantes dentales Straumann son una de las soluciones más confiables y duraderas para reemplazar dientes perdidos. Ofrecen una integración ósea superior y resultados estéticos naturales.</p>
            <p>Su colocación puede realizarse mediante cirugía guiada, optimizando tiempos y recuperación.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20Implantes%20Straumann" className="readmore" target="_blank" rel="noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === "blanqueamiento"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/philips.jpg"
              alt="Blanqueamiento Philips Zoom"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="modal-text">
            <h2>Blanqueamiento Philips Zoom</h2>
            <p>Philips Zoom es la tecnología de blanqueamiento dental profesional líder en el mundo. Permite aclarar varios tonos en una sola sesión, de forma segura y rápida.</p>
            <p>Ideal para quienes buscan resultados visibles sin sensibilidad post-tratamiento.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20Blanqueamiento%20Philips%20Zoom" className="readmore" target="_blank" rel="noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === "invisalign"} onClose={() => setOpen(null)}>
        <div className="modal-body">
          <div className="modal-img">
            <Image
              src="/img/services/invisalign.jpg"
              alt="Invisalign Ortodoncia Transparente"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="modal-text">
            <h2>Ortodoncia Transparente</h2>
            <p>Los alineadores transparentes permiten corregir la posición de los dientes de forma cómoda, estética y removible. Ideal para adultos y jóvenes que buscan un tratamiento discreto.</p>
            <p>En la primera consulta se realiza un escaneo digital y simulación de resultados.</p>
            <a href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio%20para%20Ortodoncia%20Transparente" className="readmore" target="_blank" rel="noreferrer">
              Solicitá tu turno
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
