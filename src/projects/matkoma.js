import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'


function MatKoma() {
    return (
        <StyledMain>
            <BackButton top/>
            <ProjectTitle title ={"MATKOMA"} subtitle={"University project created fall 2020"} />

            <ProjectInfo>
                <h2>SUMMARY</h2>

                <DemoCodeLinks code="https://github.com/engbergandreas/matkoma" demo="https://3djakob.github.io/matkoma/"></DemoCodeLinks>

                <ProjectImage source={'../images/matkoma/overview.png'} description={'Preferences page'} />

                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default MatKoma;