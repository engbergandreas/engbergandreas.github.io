import React from 'react'
import ProjectImage from './ProjectImage'
import styled from 'styled-components'

const MulitpleImages  = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;

    & figure {
        //margin: 15px;
        margin: 0 5px;
        max-width: 49%;

    }

    @media (max-width: 1500px) {
        & figure {
            max-width: 100%;
        }
    }
`

function ProjectImages({source1, source2, description1, description2}) {
    return (
        <MulitpleImages >
            <ProjectImage source={source1} description={description1}/>
            <ProjectImage source={source2} description={description2}/>
        </MulitpleImages>

    )
}

export default ProjectImages