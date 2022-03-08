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

function MatKoma() {
    return (
        <StyledMain className={"mainContent"}>
            <BackButton top/>
            <ProjectTitle title ={"MATKOMA"} subtitle={"University project created fall 2020"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>

                <DemoCodeLinks code="https://github.com/engbergandreas/matkoma" demo="https://3djakob.github.io/matkoma/"></DemoCodeLinks>

                <ProjectImage source={'../images/matkoma/overview.png'} description={'Preferences page'} />

                <BackButton />
            </div>
        </StyledMain>

    );
}

export default MatKoma;