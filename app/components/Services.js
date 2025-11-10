import Image from "next/image"
export default function Services({ services, setOpen }) {
    return (
        <section id="services" className="anchor">
            <div className="container">
                <div className="section-title">
                    <h1 className="special-heading" id="especialidades">ESPECIALIDADES</h1>
                    <p>Tenemos los mejores especialistas para atenderte</p>
                </div>

                <div className="services-grid">
                    {services.map((s) => (
                        <article key={s.key} className="service-card">
                            <div className="img-holder">
                                <Image src={s.img} alt={s.title} width={500} height={320} />
                            </div>
                            <div className="card-body">
                                <h2 className="service-title">{s.title}</h2>
                                <p>{s.blurb}</p>
                            </div>
                            <a href="#" className="readmore" onClick={(e) => (e.preventDefault(), setOpen(s.key))}>
                                Ver más
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}