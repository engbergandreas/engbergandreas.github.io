import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'

const StyledMain = styled.div `
    padding-top: var(--gap);
` 

function Legionen() {
    return (
        <StyledMain>
            <BackButton top/>
            <ProjectTitle title ={"LEGIONEN - THE GAME"} subtitle={"Individual project created 2019"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>
                </p>
                <DemoCodeLinks code="https://github.com/engbergandreas/cloth-simulation" demo="https://engbergandreas.github.io/cloth-simulation/"></DemoCodeLinks>

                <BackButton />
            </div>
        </StyledMain>

    );
}

export default Legionen;