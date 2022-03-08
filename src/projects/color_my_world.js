import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import YoutubeEmbed from '../Components/YoutubeEmbed'

const StyledMain = styled.div`
    padding-top: var(--gap);
`

function ColorMyWorld() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"COLOR MY WORLD"} subtitle={"Individual university project created fall 2021"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>
                    
                </p>
                <YoutubeEmbed embedID={"_tLCKDe1jJI"} ></YoutubeEmbed>
                <DemoCodeLinks code="https://github.com/engbergandreas/ColorMyWorld2D"></DemoCodeLinks>


                <BackButton />
            </div>
        </StyledMain>

    );
}

export default ColorMyWorld;