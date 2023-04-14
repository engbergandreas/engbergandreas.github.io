import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import ReferenceLink from '../Components/ReferenceLink'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'


function ProceduralTrees() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"PROCEDURAL GENERATED TREES"} subtitle={"Individual university project created fall 2021"} />

            <ProjectInfo>
                <h2>SUMMARY</h2>
                <p>Here is some great info about this project and perhaps a small summary of what the project
                    is all about. After this perhaps an image or two would be a good idea. I will also need
                    to come up with some more info so that this paragrahp actually has some length.
                </p>
                <ProjectImage source={'../images/procedural_trees/result.png'} description={'Procedural trees generated'} />
                <DemoCodeLinks code="https://github.com/engbergandreas/ProceduralGeneratedTrees"></DemoCodeLinks>

                <h3>Procedural biomes</h3>
                <ProjectImages source1={'../images/procedural_trees/heatmap.png'} description1={'Heat map visualized over terrain'}
                source2={'../images/procedural_trees/wetmap.png'} description2={'Moisture map visualized over terrian'} />

                <h3>Tree generation</h3>
                
                <h3>Procedural tree placement</h3>
                <ProjectImage source={'../images/procedural_trees/possion.png'} description={'Possion disk sampling'} />
                <ProjectImages source1={'../images/procedural_trees/jitter.png'} description1={'Jittered grid'}
                source2={'../images/procedural_trees/random.png'} description2={'Random points generated'} />
                <p>Images taken from <ReferenceLink reference={'http://devmag.org.za/2009/05/03/poisson-disk-sampling/'} text={'Dev.Mag'} />
                
                </p>

                <ProjectImage source={'../images/procedural_trees/validation.png'} description={'Tree validation of the terrain'} />
               
                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default ProceduralTrees;