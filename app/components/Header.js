import Link from "next/link"
import Image from "next/image"
export default function Header() {
    return (
        <header className="hicare-template">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 logo">
                        <Link href="#">
                            <Image src="/img/home/logo.png" alt="Dental Crew" width={220} height={60} />
                        </Link>
                    </div>
                    <nav className="col-lg-9 col-md-9 mainmenu-container">
                        <button className="mainmenu-toggler">
                            <i className="fa fa-bars" />
                        </button>
                        <ul className="mainmenu pull-right">
                            <li className="current">
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <Link href="#about">NUESTRO CENTRO</Link>
                            </li>
                            <li className="dropdown">
                                <Link href="#especialidades">ESPECIALIDADES</Link>
                            </li>
                            <li>
                                <Link href="#contact">CONTACTO</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
};