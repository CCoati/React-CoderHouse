import CartWidget from "../CartWidget/CartWidget"
import Logo from "../CartWidget/Logo"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = ( ) => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <div className="Logo">
                    <Logo />
                </div>
            </Link>

            <div className="Movi">
                
                <NavLink to={`/category/Fuerte`} className={({isActive}) =>isActive? 'ActiveOption': 'Option'}>Fuerte</NavLink>
                <NavLink to={`/category/Moderado`} className={({isActive}) =>isActive? 'ActiveOption': 'Option'}>Moderado</NavLink>
                <NavLink to={`/category/Info`} className={({isActive}) =>isActive? 'ActiveOption': 'Option'}>Info</NavLink>
                <NavLink to={`/category/Contacto`} className={({isActive}) =>isActive? 'ActiveOption': 'Option'}>Contacto</NavLink>


                {/* <button className="BotonNav">Inicio</button>
                <button className="BotonNav">Tipos</button>
                <button className="BotonNav">Contacto </button>
                <button className="BotonNav">Suscripción </button> */}
            </div>
                <CartWidget />

        </nav>
        
    )
}

export default NavBar