import CartWidget from "../CartWidget/CartWidget"
import Logo from "../CartWidget/Logo"
import './NavBar.css'

const NavBar = ( ) => {
    return (
        <nav className="navbar">

            <div className="Logo">
                <Logo />
            </div>

            <div className="Movi">
                <button className="BotonNav">Inicio</button>
                <button className="BotonNav">Tipos</button>
                <button className="BotonNav">Contacto </button>
                <button className="BotonNav">Suscripción </button>
                <CartWidget />
            </div>

        </nav>
        
    )
}

export default NavBar