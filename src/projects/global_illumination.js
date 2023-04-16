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
import ReferenceLink from '../Components/ReferenceLink'
import QuickInfo from '../Components/QuickInfo'


function GlobalIllumination() {
    return (
        <StyledMain>
            <BackButton top />
            <ProjectTitle title={"GLOBAL ILLUMINATION"} subtitle={"University project created fall 2021"} />
            <BlockMath>{" L(x \\leftarrow \\omega) = L_{e}(x \\leftarrow \\omega) + \\int_{\\omega_{1}} f_{r}(x_{1}, -\\omega,\\omega_{1}) L(x_{1} \\leftarrow \\omega_{1})cos(\\theta_{1})d\\omega_{1}"}</BlockMath>

            <ProjectInfo>
                <QuickInfo typeinfo={["C++", "Global illumination",]}></QuickInfo>
                <h2>SUMMARY</h2>
                <p>
                In this project we created a Monte-Carlo ray tracer to simulate global illumination of a simple scene. 
                The ray tracer was implemented in C++ using a binary tree structure that supports reflection of both specular
                and lambertian reflections. This project was part of the course Global Illumination and Rendering (TNCG015) 
                at Linköping's University and was created by me and <ReferenceLink reference={"https://www.linkedin.com/in/peder-dromberg-518732193/"} text={"Peder Dromberg"}></ReferenceLink>. 
                
                {/* <InlineMath>{"\\int_0^2 + 02"}</InlineMath> */}
                
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