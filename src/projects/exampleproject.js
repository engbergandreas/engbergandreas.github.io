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

function ExampleProject() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"THIS IS PROJECT TITLE"} subtitle={"some info about creation date? or other small title"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>
                    Here is some great info about this project and perhaps a small summary of what the project
                    is all about. After this perhaps an image or two would be a good idea. I will also need
                    to come up with some more info so that this paragrahp actually has some length.
                </p>

                <ProjectImage source={'../images/placeholder1024.png'} description={'Image description'} />
                <DemoCodeLinks code="https://github.com/engbergandreas/" demo="https://engbergandreas.github.io/cloth-simulation/"></DemoCodeLinks>
                
                <BlockMath>{" L(x \\leftarrow \\omega) = L_{e}(x \\leftarrow \\omega) + \\int_{\\omega_{1}} f_{r}(x_{1}, -\\omega,\\omega_{1}) L(x_{1} \\leftarrow \\omega_{1})cos(\\theta_{1})d\\omega_{1}"}</BlockMath>
                <p>
                    If inline math is needed <InlineMath>{"\\int_0^2 + 02"}</InlineMath> this can be used.
                </p>
                <p>
                    If a youtube video should be used.
                </p>
                <YoutubeEmbed embedID={"W2x3ZlnKtjg"}></YoutubeEmbed>

                <ProjectImages source1={'../images/placeholder250.png'} description1={'First image description '}
                    source2={'../images/placeholder640.png'} description2={'Second image description'} />

                <h2>Section</h2>
                <p> 
                    This also contains some more info about the project Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </p>
                <p> 
                    Then comes another paragraph This also contains some more info about the project Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </p>
                <ProjectImage source='../images/placeholder640.png' description={'Image description'} />
                <BackButton />
            </div>
        </StyledMain>

    );
}

export default ExampleProject;