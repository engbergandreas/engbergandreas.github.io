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

function BobRoss() {
    return (
        <StyledMain className={"mainContent"}>
            <BackButton top />
            <ProjectTitle title={"3D PAINTING - BOB ROSS"} subtitle={"University project created spring 2020"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>
                    The Bob Ross 3D painting was a 5-man group project made in Blender for ththe course '3-D Computer Graphics' (TNM061). In this project we were to explore 
                    different techniques in computer graphics and could freely choose what to do. We decided to make a 3D rendering of one of Bob Ross famous paintings. 
                    We split the scene into smaller components where each and everyone was responsible for modelling and texturing their respective parts. I created the left
                    most tree and the water. This was the first time I worked with 3D modelling and Blender. 
                    
                </p>
                <YoutubeEmbed embedID={"W2x3ZlnKtjg"}></YoutubeEmbed>
                <h3>Tree</h3>
                <p>
                    The tree was built by extruding the default cube into a tree looking shape, the leaves were then added using a particle system. 
                    The position of the leaves was controlled by weight painting the branches of the tree. 
                </p>
                <ProjectImage source={'../images/bob_ross/logo.jpg'} description={'Final result'}/>
                <h3>Water</h3>
                <p>
                    We opted to use a shader for the water simulation as this was originally supposed to be a still image. The water was made from scratch using the node system
                    in Blender. The goal was to create as realistic a water effect as possible, it has key features such as correct index of refraction, reflection, and depth using 
                    the volume absoption and volume scatter nodes. By adding a noise texture to the water we can make it look more alive and even further realistic as well as
                    adding animation to the water by key-framing the z-component. The image below shows the nodes used and the result in a test environment. 
                </p>
                <ProjectImages source1={'../images/bob_ross/water_nodes.png'} description1={'Shader nodes to create water effect.'}
                    source2={'../images/bob_ross/water.png'} description2={'Rendered water in test scene.'}/>

                <BackButton />
            </div>
        </StyledMain>

    );
}

export default BobRoss;