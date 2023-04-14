import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import YoutubeEmbed from '../Components/YoutubeEmbed'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'

function ColorMyWorld() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"COLOR MY WORLD"} subtitle={"Individual university project created fall 2021"} />

            <ProjectInfo>
                <h2>SUMMARY</h2>
                <p>
                    Color My World is an individual game project that was made in Unity for the course 
                    'Design & Programming of Compute Games' (TDDD23) in about three weeks time. The aim of the project was
                    to create a prototype game with focus on game deisgn, learnability, communication, player progress and skill.
                </p>

                <p>
                    Color My World is a 2D puzzle platform game, the player reside in a 
                </p>
                <YoutubeEmbed embedID={"_tLCKDe1jJI"} ></YoutubeEmbed>
                <DemoCodeLinks code="https://github.com/engbergandreas/ColorMyWorld2D"></DemoCodeLinks>
                
                <p>
                    The core game mechanic of the game is the color gun. 
                </p>

                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default ColorMyWorld;