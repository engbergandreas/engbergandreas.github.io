import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
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
                    Our model was built as a m x n grid of particles with a mass which are connected by springs and dampers according to the image below. 
                    The idea comes from Xavier Provot using structural, shear and flexion springs.
                    The structural springs rejects compression and traction, shear springs helps maintain structure and the flexion springs
                    resists unnatural folding.
                </p>

                <ProjectImage source='../images/cloth/mass-spring-system.png' description='Graphical presentation of the mass-spring system' />

                <p>
                    Every frame we study the particles position and calculate the force on each particle for the next frame.
                    The force on a single particle is controlled by Newtons second law of motion, it consists of both internal and external forces. 
                    The internal forces are: spring force according to Hookes law and a linear damping force,
                    while the external force consist of gravity and a linear wind force using perlin noise to simulate random movement that affect the cloth. 
                </p>

                <p> 
                    We began by implementing a simulink model and ran some simulations in MATLAB to make sure that our model was built correctly.
                    These simulation were made using a simplified model with less springs and particles compared to the final version. 
                    Using MATLAB plots and comparing them to the plots from simulink gave us confidence that our model was infact correct. 
                </p>
                <p>            
                    We then began the process of visualizing our model using P5.js. We start by drawing a grid of particles and connected them to their neighbors. 
                    Then we had to redo the physics implementation we had previously done in MATLAB. 
                    However here we encountered some problems when calculating these cloth forces. 
                    What we did was incorrectly calculating each particle current force and applied it to the particle in the same loop, this gave us very wierd results 
                    since the neighboring particles were now being calculated using both old and new force data.
                    To overcome this we first calculate the current force of every particle using the data from the previous frame, then we loop over every particle again
                    this time calculating the acceleration, velocity and position for the next frame. 
                    
                </p>
                <p>
                    We implemented a functional UI for the user to change the parameters of the cloth to see how they influence the simulation.
                    These include changing the time step of the integration method, weight of the particles, the spring constants and damping constant.
                    Furthermore we gave the option of choosing integration methods as a way to compare Euler and RK4 method. 
                    Due to Euler integration being a very simple method, there are some values that are unstable using this method compared to RK4 (Note that there are values that make RK4 unstable as well).
                    This also gave the need for a reset button. 
                    <br></br>
                     
                    Finally we added a texture to our cloth. 
                    Using the particles placement in the grid as their vertex position we create a triangle strip using the neighboring particles.
                    These are then UV mapped onto our texture. 
                </p>

                <ProjectImage source={'../images/cloth/textureflag.png'} description='' />
                <br></br>

                <ProjectImage source={'../images/cloth/textureflag2.png'} description='' />
                <BackButton />
            </div>
        </StyledMain>

    );
}

export default ClothSimulation;