import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer `
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #3C403D;
    justify-content: center;
    align-items: center;
    background: #fff;
    display: flex;
    height: 10vh;
    min-height: 100px;
    font-size: 1.5em;
`


function Footer() {
    return (
        <StyledFooter>
            <h2>Linked in</h2>
            <h2>Github</h2>
            <h2>Mail</h2>

        </StyledFooter>
    );
}

export default Footer;