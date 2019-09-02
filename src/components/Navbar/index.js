import React from 'react';
import './style.css';

const Navbar = () => {
    return(
        <header className="navbar">
            <h4>LOGOAQUI</h4>
            <div className="optionsNavbar">
                <h4>icon1</h4>
                <h4>icon2</h4>
                <h4>icon3</h4>
                <button className="buttonPrimary">Cadastre-se</button>
            </div>
        </header>
    )
}

export default Navbar;