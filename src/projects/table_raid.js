import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import DemoVideo from '../Components/DemoVideo'
import QuickInfo from '../Components/QuickInfo'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'


function ExampleProject() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"TABLE RAID"} subtitle={"Bachelor project created spring 2021"} />

            <ProjectInfo>
                <QuickInfo typeinfo={["VR", "Multiplayer", "Unity"]}></QuickInfo>

                <h2>SUMMARY</h2>
                <p>
                    Table Raid is a gesture based VR game created in 'Media Technology - Bachelor Project TNM094' at Linköpings University
                    during 12 weeks by a group of 5 people. The main focus of the course was to create a larger project and gain experience
                    in system development and agile development.


                    <br></br>
                    Ill present those parts of the project that I was most involved with which include general game design, VR integration, 
                    gesture recognition system, abilities system and the multiplayer aspect.
                    
                </p>
                <h2>Demo</h2>
                {/*<DemoVideo source={'../videos/DemoTableRaid.mp4'} videotype={"video/mp4"}></DemoVideo> */}
                <DemoCodeLinks code="https://github.com/jonan270/gesture-based-game/tree/Beta2.0"></DemoCodeLinks>

                <h3>Game design</h3>
                <ProjectImage source={'../images/table_raid/composite.png'} description={'User performing a gesture and ability.'} />

                <ProjectImages source1={''} description1={''}
                source2={''} description2={''} />

                <h3>Gesture recognition</h3>
                <ProjectImage source={'../images/table_raid/gesture_new.PNG'} description={'User performing a gesture.'} />

                <h3>Abilities system</h3>

                <h3>Multiplayer</h3>


                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default ExampleProject;