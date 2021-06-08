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

function ClothSimulation() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"CLOTH SIMULATION"} subtitle={"University project created fall 2021"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>
                    The cloth simulation was a project done in the course 'Modeling Course (TNM085)' at Linköpings University during 6½ weeks by a group of 4 people.
                    The purpose was to simulate a physically based model of their own choosing.
                    The model was built using a mass-spring system in a grid like fashion.
                    The acting forces are formulated for each mass and Eulers method and Runge Kutta 4 are used to simulate the cloths movement.
                    In the project we first implemented a simplified 2D version in Matlab and a Simulink model was developed.
                    Later on the system was further implemented in JavaScript using P5.js and WebGL for visualization and texturing, Perlin noise was used to simulate the wind
                    acting on the cloth.
                </p>

                <ProjectImage source={'../images/cloth/clothsystem.png'} description='' />
                <DemoCodeLinks code="https://github.com/engbergandreas/cloth-simulation" demo="https://engbergandreas.github.io/cloth-simulation/"></DemoCodeLinks>
                <h1 style={{ textAlign: 'center' }}>Implementation</h1>

                <h2>Model</h2>
                <p>
                    Our model was built using an m x n grid of particles with a mass connected with springs and dampers. The idea comes from Xavier Provot using
                    structural, shear and flexion springs. The structural springs rejects compression and traction, shear springs helps maintain structure and the flexion springs
                    resists unnatural folding.
                </p>
                <ProjectImage source='../images/cloth/mass-spring-system.png' description='Graphical presentation of the mass-spring system' />

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

export default ClothSimulation;