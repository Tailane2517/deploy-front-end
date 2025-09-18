// src\components\Header\index.jsx

import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/image.png'

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <Link to="/" className="brand">
                    <img src={logo} alt="Flor logo"/>
                    <span>Flores & Cia</span>
                </Link>

                <nav className="nav">
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? 'link active' : 'link'}>Serviços</NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? 'link active' : 'link'}>Sobre Nós</NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contato</NavLink>
                </nav>
            </div>
        </header>

        
    )

}

export default Header;