import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'


function GlobalIllumination() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"GLOBAL ILLUMINATION"} subtitle={"University project created fall 2021"} />
            <BlockMath>{" L(x \\leftarrow \\omega) = L_{e}(x \\leftarrow \\omega) + \\int_{\\omega_{1}} f_{r}(x_{1}, -\\omega,\\omega_{1}) L(x_{1} \\leftarrow \\omega_{1})cos(\\theta_{1})d\\omega_{1}"}</BlockMath>

            <ProjectInfo>
                <h2>SUMMARY</h2>
                <p>
                    
                    <InlineMath>{"\\int_0^2 + 02"}</InlineMath>
                    
                </p>
                <ProjectImage source={'../images/global_illumination/result.bmp'} description={''} />
                <DemoCodeLinks code="https://github.com/engbergandreas/RayTracer"></DemoCodeLinks>
                
                <h3>The scene</h3>
                <h3>Intersection with objects</h3>
                <h3>Reflection</h3>
                <h3>Ray tree</h3>
                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default GlobalIllumination;