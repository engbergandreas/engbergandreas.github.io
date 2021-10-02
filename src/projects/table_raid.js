import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import DemoVideo from '../Components/DemoVideo'
import QuickInfo from '../Components/QuickInfo'

const StyledMain = styled.div`
    padding-top: var(--gap);
`

function ExampleProject() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"Table Raid"} subtitle={"Bachelor project created fall 2021"} />

            <div className="projectInfo">
                <QuickInfo typeinfo={["VR", "Multiplayer", "Unity"]}></QuickInfo>

                <h2>SUMMARY</h2>
                <p>
                    Table Raid is a gesture based VR game created in 'Media Technology - Bachelor Project TNM094' at Linköpings University
                    during 12 weeks by a group of 5 people. The main focus of the course was to create a larger project and gain experience
                    in system development and agile development.


                    Here is some great info about this project and perhaps a small summary of what the project
                    is all about. After this perhaps an image or two would be a good idea. I will also need
                    to come up with some more info so that this paragrahp actually has some length.
                </p>
                <h2>Demo</h2>
                <DemoVideo source={'../videos/DemoTableRaid.mp4'} videotype={"video/mp4"}></DemoVideo>
                <ProjectImage source={'../images/placeholder1024.png'} description='this image represents bla bla blasad assaddsasdasad  dsads ' />
                <DemoCodeLinks code="https://github.com/jonan270/gesture-based-game/tree/Beta2.0"></DemoCodeLinks>

                <p>
                    then after an image we have some more text to explain something else about the project, which can also include some maths
                    or w/e is nessesary. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                <ProjectImages source1={'../images/placeholder250.png'} description1={'this image represents bla bla bla as sadsad ds a dsa sad'}
                    source2={'../images/placeholder640.png'} description2={'this is another descprition hoasdasd'} />

                <h2>Section</h2>
                <p> This also contains some more info about the project Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </p>
                <p> Then comes another paragraph This also contains some more info about the project Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </p>
                <ProjectImage source='../images/placeholder640.png' description='asdasdd' />
                <BackButton />
            </div>
        </StyledMain>

    );
}

export default ExampleProject;