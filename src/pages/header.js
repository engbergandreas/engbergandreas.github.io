import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {


    return (
        <header>
            <nav className="wrapper">
                <NavLink exact activeClassName="activePage" className="wrapperChild" to="/">Andreas Engberg</NavLink >
                <NavLink activeClassName="activePage" className="wrapperChild" to="/portfolio">Portfolio</NavLink>
                <NavLink activeClassName="activePage" className="wrapperChild" to="/projects">Projects</NavLink>
                <NavLink activeClassName="activePage" className="wrapperChild" to="/about">About</NavLink>
            </nav>
        </header>
    );
}

export default Header;