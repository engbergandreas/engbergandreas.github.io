import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'

const StyledMain = styled.div`
    padding-top: var(--gap);
`

function FaceRecognition() {
    return (
        <StyledMain className={"mainContent"}>
            <BackButton top />
            <ProjectTitle title={"FACE RECOGNITION"} subtitle={"University project created fall 2021"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>

                </p>

                <DemoCodeLinks code="https://github.com/engbergandreas/FacialRecognition"></DemoCodeLinks>


                <h3>Finding eyes</h3>
                <h3>Fisherfaces</h3>
                <ProjectImage source={'../images/face_recognition/fisherfaces.png'} description={''}/>
                <BackButton />
            </div>
        </StyledMain>

    );
}

export default FaceRecognition;