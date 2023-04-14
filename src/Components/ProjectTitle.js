import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div `
    text-align: center;
    margin: 5vh 0;

    & h1 {
        font-size: 3.5em;
        line-height: 0.9em;
        margin: 0;
    }

    & h2 {
        margin: 0;
    }
`

function ProjectTitle({title, subtitle}) {
    return (
        <StyledTitle>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
        </StyledTitle>
    );
}

export default ProjectTitle;