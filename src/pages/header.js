import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const RightHalfHeader = styled.div `
display: flex;
justify-content: space-evenly;
width: 375px;
` 
const StyledHeader = styled.header `
    position: absolute;
    left: 0;
    right: 0;
` 
function Header() {
    return (
        <StyledHeader>
            <nav className="wrapper">
                <NavLink exact activeClassName="activePage" className="wrapperChild" to="/">Andreas Engberg</NavLink >
                <RightHalfHeader>
                    <NavLink activeClassName="activePage" className="wrapperChild" to="/portfolio">Portfolio</NavLink>
                    <NavLink activeClassName="activePage" className="wrapperChild" to="/projects">Projects</NavLink>
                    <NavLink activeClassName="activePage" className="wrapperChild" to="/about">About</NavLink>
                </RightHalfHeader>
            </nav>
        </StyledHeader>
    );
}

export default Header;