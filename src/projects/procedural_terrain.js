import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import ReferenceLink from '../Components/ReferenceLink'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'
import QuickInfo from '../Components/QuickInfo'
import { InlineMath } from 'react-katex'

function ProceduralTerrain() {
    return (
        <StyledMain >
            <BackButton top />
            <ProjectTitle title={"PROCEDURAL GENERATED TERRAIN"} subtitle={"University project created winter 2021"} />

            <ProjectInfo>
                <QuickInfo typeinfo={["OpenGL","Real-time rendering", "Procedural", "Frustum culling", "CPU threading", "LOD" ]}></QuickInfo>
                <h2>SUMMARY</h2>
                <p>
                    In this project we created an endless procedurally generated terrain in OpenGL using 
                    multiple Perlin noise layers (FBM) to create an interesting environment.
                    We implemented techniques such as frustum culling,
                    discrete level of detail (LOD) and CPU threading to improve real time rendering.
                    This project was part of the course Advanced Game Programming (TSBK03)
                    at Linköping's University and was created by me and <ReferenceLink reference={"https://github.com/mansaronsson"} text={"Måns Arronsson"}></ReferenceLink> 

                </p>

                <ProjectImage source={'../images/procedural_terrain/result.png'} description='' />
                <DemoCodeLinks code="https://github.com/engbergandreas/ProceduralGeneratedTerrain"></DemoCodeLinks>

                <h1 style={{ textAlign: 'left' }}>Implementation</h1>

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
                    The normal at each vertex is computed by considering all connected triangles, 
                    we compute an average weighted sum of all connected triangle normals where the area of the triangle acts as its weight.
                    For non-edge vertices we know all neighboring vertices lie in the same terrain chunk. 
                    However, for edge vertices there can be up to three vertices in a neighbor chunk. 
                    Instead of doing an expensive search for those vertex indices we opted to generate fake vertices 
                    for those missing like shown in the left figure below. This is done to create smooth surface normals 
                    along the edges of neighboring chunks and avoid artifacts as shown the image below. 
                </p>
                <ProjectImages source1={'../images/procedural_terrain/fakevertex.png'} 
                description1={'Fake vertices are generated to compute the correct normal for yellow vertex.'}
                source2={'../images/procedural_terrain/normalcomparision.png'}
                description2={'Comparision showing the artifacts that arise when not computing edge normals correctly.'}
                ></ProjectImages>

                <h3>Frustum culling</h3>
                <p>
                    To improve performance, we implemented frustum culling to only render chunks that are visible to the camera.
                    We do this by checking if the bounding of the chunk is inside the camera frustum, visualized in green.
                    If the bounding box is outside the frustum, we can be sure the chunk is not visible and we can skip rendering it.
                    We implemented culling on the CPU in the world coordinate system. Only two of the eight vertices on the AABB needed to be tested 
                    against each camera plane. These vertices were called <i>p-vertex</i> and <i>n-vertex</i>. 
                    The p-vertex was given by the point furthest in the positive direction i.e., normal of the tested camera plane. The n-vertex
                    was given by the point furthest in the negative direction. The two vertices can efficiently be retrieved using the signs of the 
                    x, y- and z-component of the plane normal using a look-up table. 
                    
                </p>
                <ProjectImage source={'../images/procedural_terrain/bounding_box.PNG'} 
                description={'Result from culling terrain, chunks outside camera frustum (white lines) are not drawn.'} />
                
                <h3>Discrete level of detail</h3>
                <p>
                    We implemented discrete LOD by creating several copies of a chunk with fewer vertices per level. 
                    Every level used half the number of vertices from the previous level and vertices are "reused" between levels.
                    Level one visits every vertex in the grid while level two and three visits every second and every fourth vertex respectively, 
                    see left figure below. 
                    The number of vertices in the grid was <InlineMath>{"n_{lod} =  (n - 1) / lod + 1"}</InlineMath> where n is the base number 
                    of vertices in the grid and <InlineMath>{"lod = 1, 2, ..., k"}</InlineMath> is the number of levels a chunk have.
                    For k levels, n must be chosen so that it fulfils two criterion; n - 1 must be divisible by <InlineMath>{"2^{k-1}"}</InlineMath> 
                    and chosen such that <InlineMath>{"n = 2^{k-1} \\cdot b + 1"}</InlineMath> with factor b = [1, inf) determining the number of columns 
                    in the lowest level. The LOD chunks were stored as a pointer inside the chunk class. We used the distance between the chunk and camera 
                    to chose which LOD-chunk to render. The right figure below shows the different LOD from green (most detailed) to red (least detailed).
                    
                </p>
                <ProjectImages 
                    source1={'../images/procedural_terrain/lodvertices.png'} 
                    description1={"Discrete LOD for 3 levels, showing the stride between vertices."}
                    source2={'../images/procedural_terrain/lod.PNG'}
                    description2={'LOD visualized by color, green most detailed to red least detailed with respect to distance from camera.'}>

                </ProjectImages>
                
                <h3>Multi-threading</h3>
                <p>
                    Creating the terrain was a computationally expensive task and we wanted to improve the performance by using multiple threads.
                    This was the first time any of us had worked with threading, so the implementation was hacked together to make 
                    it work and is not very elegant. Chunks were generated on detached threads to avoid blocking the main thread and render loop. 
                    Working with threads and OpenGL was a bit tricky and the solution we came up with was to generate all geometry data on the thread add it
                    to a render queue and bake them on the main thread to create correct VAO and VBO bindings.  Quick successive movements outside of chunks, 
                    e.g., crossing a chunk corner or leaving and quickly returning to a chunk, could trigger chunks to be generated in the wrong order. 
                    This made the chunk grid update incorrectly. We solved this by adding a movement queue and only starting to generate chunks of a 
                    movement when all chunks from the previous movement had finished. 
                </p>

                <h3>Results</h3>
                <p>
                The project culminated in a program that boasts endless terrain generation. Object culling resulted in a 60% boost in frame rate, 
                alongside LOD which decreased rendering time by up to 5.5 times. To achieve this, we constructed a 17 x 17 grid of chunks, 
                each containing roughly 26,000 vertices and 5 LOD levels.

                We experimented with various settings on an Intel i5 8th gen processor with integrated graphics. With both LOD and frustum culling enabled, 
                we were able to achieve 600-1100 fps. Turning culling off while leaving LOD on still netted us a solid 200-400 FPS. 
                In contrast, using culling alone without LOD resulted in around 150-250 FPS, while disabling both settings gave us a mere 30 FPS, 
                roughly 95% slower than with both features enabled.<br></br> Mission successful!
                </p>

                <BackButton />
            </ProjectInfo>
        </StyledMain>
    );
}

export default ProceduralTerrain;