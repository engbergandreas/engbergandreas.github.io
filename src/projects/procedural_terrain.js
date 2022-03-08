import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import ReferenceLink from '../Components/ReferenceLink'

const StyledMain = styled.div`
    padding-top: var(--gap);
`

function ProceduralTerrain() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"PROCEDURAL GENERATED TERRAIN"} subtitle={"University project created winter 2021"} />

            <div className="projectInfo">
                <h2>SUMMARY</h2>
                <p>
                    In this project we created an endless procedurally generetared terrain in OpenGL using 
                    multiple perlin noise layers (FBM) to create an interesting environment.
                    We implemented techniques such as frustum culling,
                    discrete level of detal (LOD) and CPU threading to improve real time rendering.
                    This project was part of the course Advanced Game Programming (TSBK03)
                    at Linköpings University and was created by me and <ReferenceLink reference={"https://github.com/mansaronsson"} text={"Måns Arronsson"}></ReferenceLink> 

                </p>

                <ProjectImage source={'../images/procedural_terrain/result.png'} description='' />
                <DemoCodeLinks code="https://github.com/engbergandreas/ProceduralGeneratedTerrain"></DemoCodeLinks>

                <h1 style={{ textAlign: 'center' }}>Implementation</h1>

                <h2>Terrain</h2>

                <p>
                The endless terrain was created as an unevenly sized grid of equally large chunks.
                Each chunk consisted of a mesh of vertices with equal spacing containing the terrain data.
                We define the triangle strips as shown in the image below. 
                We use a skirt at the end of each chunk to hide artifacts between neighboring chunks of different LOD.
                The height of any given vertex is computed using Fractal Brownian Motion (FBM), we used six octaves 
                of Perlin Noise where each octave doubles the frequency and halves the amplitude.
                </p>

                <ProjectImage source={'../images/procedural_terrain/grid.png'} description={'Underlying terrain structure'}></ProjectImage>

                <h3>Normals</h3>
                <p>
                    The normal at each vertex is computed by considering all connected triangles.
                    For non-edge vertices we know all neighboring vertices lie in the same terrain chunk. 
                    However, for edge vertices there can be up to three vertices in a neighbor chunk. 
                    Instead of doing an expensive search for those vertex indices we opted to generate fake vertices 
                    for those missing like shown in the left figure below. This is an important problem to solve
                    as we must create smooth surface normals between neighboring chunks.  
                </p>
                <ProjectImages source1={'../images/procedural_terrain/fakevertex.png'} 
                description1={'Fake vertices are generated to compute the correct normal for yellow vertex.'}
                source2={'../images/procedural_terrain/normalcomparision.png'}
                description2={'Comparision showing the artifacts that arise when not computing edge normals correctly.'}
                ></ProjectImages>

                <h3>Frustum culling</h3>
                <ProjectImage source={'../images/procedural_terrain/bounding_box.png'} 
                description={'Result from culling terrain, chunks outside camera frustum (white lines) are not drawn.'} />
                


                <h3>Discrete level of detail</h3>
                <ProjectImage source={'../images/procedural_terrain/lod.png'} 
                description={'LOD visualized by color, green most detailed to red least detailed with respect to distance from camera.'} />



                <h3>Multi-threading</h3>

                <BackButton />
            </div>
        </StyledMain>

    );
}

export default ProceduralTerrain;