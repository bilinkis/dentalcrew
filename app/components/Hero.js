import Image from "next/image"
export default function Hero() {
    return (
        <section className="hero-banner">
            <div className="hero-bg">
                <Image src="/img/slides/image4.jpg" alt="Consultorio dental" fill priority style={{ objectFit: "cover" }} />
            </div>
            <div className="hero-content">
                <h2 className="hero-subtitle">NUEVO NÚMERO DE RESERVAS</h2>
                <h1 className="hero-phone">11 7079-2121</h1>
                <p className="hero-text">Solicitá tu turno para nuestro consultorio en Caballito</p>
                <a
                    href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio"
                    className="hero-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CONTACTATE POR WHATSAPP
                </a>
            </div>
        </section>
    )
};