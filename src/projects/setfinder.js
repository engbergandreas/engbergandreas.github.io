import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'


function SetFinder() {
    return (
        <StyledMain>
            <BackButton top/>
            <ProjectTitle title ={"SETFINDER"} subtitle={"University project created fall 2018"} />

            <ProjectInfo>
                <h2>SUMMARY</h2>
                <p>

                </p>
                
                <DemoCodeLinks code="https://github.com/engbergandreas/SetFinder" demo="http://www.student.itn.liu.se/~anden561/Avslutade%20kurser/TNMK30%20Projekt%202019/"></DemoCodeLinks>


                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default SetFinder;