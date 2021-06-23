import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1 `
    font-size: 3.5em;
    line-height: 0.9em;
` 

function ProjectTitle({title, subtitle}) {
    return (
        <div className="projectTitleInfo">
            <StyledH1> {title} </StyledH1>
            <h2> {subtitle} </h2>
        </div>
    );
}

export default ProjectTitle;