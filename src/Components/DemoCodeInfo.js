import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 15px 0;
`

const Button = styled.div`
border: 2px solid #3C403D;
/*border: 1px solid #e1e4e8;*/
height: 60px;
width: 110px;
margin: 0 5px;
display: inline-flex;
justify-content: center;
align-items: center;
color: #3C403D;
font-size: larger;
font-weight: 600;

&:hover {
    background: #f6f8fa;
}
`


function DemoCodeLinks({ demo, code }) {
    if (demo && code) {
        return (
            <Container>
                <Button as="a" href={demo} target="_blank">Demo</Button>
                <Button as="a" href={code} target="_blank">Code</Button>
            </Container>
        )
    }
    else if (demo) {
        return (
            <Container>
                <Button as="a" href={demo} target="_blank">Demo</Button>
            </Container>
        )
    }
    else {
        return (
            <Container>
                <Button as="a" href={code} target="_blank">Code</Button>
            </Container>
        )
    }
}

export default DemoCodeLinks