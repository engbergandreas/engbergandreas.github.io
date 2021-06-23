import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure `
    display: table;
    margin: 0 auto;
`

const Image = styled.img `
    max-width: 100%;
    display: block;
    margin: 0 auto;
` 
const Caption = styled.figcaption `
    display: table-caption;
    caption-side: bottom;
    color: gray;
    font-size: small;
`

function ProjectImage({source, description}) {
    
    return (
        <StyledFigure>
        <Image src={source} alt={description} /> 
        <Caption>{description}</Caption>
        </StyledFigure>
    )
}

export default ProjectImage