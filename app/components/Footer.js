export default function Footer() {
    return (
        <>
            <section id="hicare-bottom" className="hicare-template">
                <div className="container">
                    <div className="row">
                        <div className="copyright">
                            <p style={{ textAlign: "center" }}>
                                Copyright © {new Date().getFullYear()} DENTAL CREW. Todos los derechos reservados.
                            </p>
                        </div>
                        <div className="credit pull-right">
                            <ul className="social" />
                        </div>
                    </div>
                </div>
            </section>

            <a
                href="https://wa.me/541144720286?text=Me%20gustaría%20sacar%20un%20turno%20en%20el%20consultorio"
                className="whatsapp-button"
                target="_blank"
                rel="noreferrer"
            />
        </>)
};