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
    min-height: var(--gap);
    font-size: 1.5em;

    & a {
        margin: 0 15px;
    }
`


function Footer() {
    return (
        <StyledFooter>
            
            <a href="https://www.linkedin.com/in/andreas-engberg/"><img src="/images/linkedin.png"></img></a>
            <a href="https://github.com/engbergandreas"><img src="/images/GitHub.png"></img></a>
            <a href="mailto:adde.engberg@gmail.com"><img src="/images/mail.png"></img></a>


        </StyledFooter>
    );
}

export default Footer;