import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Button = styled.div `
border: 1px solid black;
height: 60px;
width: 110px;
margin: 0 5px;
display: inline-flex;
justify-content: center;
align-items: center;
margin: 20px 5px 0 5px;

&:hover {
    background: #cecece;
}
`


function DemoCodeInfo({demo, code}) {
    return (
        <Container>
            <Button as="a" href={demo} target="_blank">Demo</Button>
            <Button as="a" href={code} target="_blank">Code</Button>
        </Container>

    )
}

export default DemoCodeInfo