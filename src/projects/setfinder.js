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

function SetFinder() {
    return (
        <StyledMain>
            <BackButton top/>
            <ProjectTitle title ={"SETFINDER"} subtitle={"some info about creation date? or other small title"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>

                </p>
                
                <DemoCodeLinks code="https://github.com/engbergandreas/SetFinder" demo="http://www.student.itn.liu.se/~anden561/Avslutade%20kurser/TNMK30%20Projekt%202019/"></DemoCodeLinks>


                <BackButton />
            </div>
        </StyledMain>

    );
}

export default SetFinder;