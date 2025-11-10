import Image from "next/image"
export default function About() {
    return (
        <section id="about" className="bio-section">
            <div className="bio-container">
                <div className="bio-text">
                    <h3 className="bio-subtitle">Nuestro centro</h3>
                    <h2 className="bio-title">Centro de máxima tecnología en Caballito</h2>
                    <p>Contamos con 5 consultorios de última generación. Estos poseen pantallas LED incorporadas al sillón para poder ver lo que desees durante tu atención, además de masajeador descontracturante para mayor confort.</p>
                    <p>También contamos con un quirófano inteligente que permite video y visor de tomografías por LCD para la realización de todos nuestros procedimientos implantológicos y quirúrgicos.</p>
                    <p>Además, tenemos 3 salas de espera: la principal interactiva, una recreativa con juegos para niños y adultos, y la sala pre y post quirúrgica. Todo esto en el corazón de Caballito, en un ambiente cálido y acogedor para hacer tu visita mucho más placentera. Porque creemos que tu bienestar también es salud.</p>
                </div>
                <div className="bio-image">
                    <Image src="/img/home/5.jpg" alt="Centro odontológico en Caballito" width={900} height={600} />
                </div>
            </div>
        </section>
    )
};