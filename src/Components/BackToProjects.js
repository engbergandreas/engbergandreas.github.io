import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div `
display: flex;
justify-content: ${props => props.isTop ? "start" : "center"};
margin: 15px 0;
`

const Button = styled.div `
border: 2px solid #3C403D;
height: 50px;
width: 200px;
margin: ${props => props.isTop ? "0 0 0 15px" : "0 "};
display: flex;
justify-content: center;
align-items: center;
color: #3C403D;
font-size: larger;
font-weight: 600;

&:hover {
    background: rgba(0,0,0,0.25);
    color: #fff;
}
`

function BackToProjects({top = false}) {
    return (
        <Container isTop={top}>
            <Link to="/projects"><Button isTop={top}>Back to all projects</Button></Link>
        </Container>
    )
}

export default BackToProjects