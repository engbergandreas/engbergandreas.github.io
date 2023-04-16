import React from 'react'
import BackButton from '../Components/BackToProjects'
import ProjectTitle from '../Components/ProjectTitle'
import ProjectImage from '../Components/ProjectImage'
import ProjectImages from '../Components/ProjectImages'
import DemoCodeLinks from '../Components/DemoCodeInfo'
import styled from 'styled-components'
import StyledMain, { ProjectInfo } from '../Components/UtilityComponents'
import YoutubeEmbed from '../Components/YoutubeEmbed'
import { InlineMath, BlockMath } from 'react-katex'
import QuickInfo from '../Components/QuickInfo'
import ReferenceLink from '../Components/ReferenceLink'



function InteractiveCanvas() {
    return (
        <StyledMain >
            <BackButton top />
            <ProjectTitle title={"pAInting with GANs"} subtitle={"Interactive AI Canvas - University project created fall 2022"} />

            <ProjectInfo>
                <QuickInfo typeinfo={["Machine learning", "Generative AI", "PyTorch", "Synthesize images"]}></QuickInfo>
                <h2>SUMMARY</h2>
                <p>
                    Implementation of NVIDIA's generative SPADE network in PyTorch. Based on the original paper of Park et.al.
                    GauGAN is a generative network with a special normalization method SPADE, the generator takes as input a 
                    segmentation mask and a corresponding real image or noise vector in a high dimensional space and synthesize a 
                    photorealistic image as output. Depending on the dataset used during training it is capable of multi-modal 
                    image synthesis, which means that it can generate images in various different styles using the same input 
                    segmentation mask. In my implementation I trained the network on parts of COCO-Stuff dataset for about 160 epochs 
                    on my home computer which limit the rendering capabilities of the network. Beside the network I also created an 
                    interactive app hosted on streamlit, where you can draw your own doodles and turn them into semi-photorealistic images.

                    <br></br>
                    <br></br>
                    This project was part of the course Artificial Intelligence for Interactive Media (TNM095) 
                    at Linköping's University. The full report can be found <ReferenceLink reference={"https://github.com/engbergandreas/GauGAN/blob/main/Interactive_AI_canvas_TNM095.pdf"} text={"here"} />.
                
                </p>
                <YoutubeEmbed embedID={"3p0-TzECcMg"}></YoutubeEmbed>

                <DemoCodeLinks code="https://github.com/engbergandreas/GauGAN" demo="https://engbergandreas-gaugan.streamlit.app/"></DemoCodeLinks>
                <h2>Architecture</h2>
                <p>
                The network consists of an encoder, generator, and discriminator, all working together to produce photorealistic images 
                given a noise vector and segmentation mask.
                </p>
                <h3>Generator</h3>
                <h3>Encoder</h3>
                <h3>Discriminator</h3>
                <h3>SPADE</h3>
                <h2>App</h2>
                <p>
                    An interactive application was written in Python and hosted on <i>streamlit</i>. It allows a user to draw semantic doodles 
                    in an interactive canvas and generate a photorealistic image in real time. 
                    Test the app yourself at <ReferenceLink reference={"https://engbergandreas-gaugan.streamlit.app/"} text={"https://engbergandreas-gaugan.streamlit.app/"} />.
                    For ease of use and for better visualization each class in COCO-Stuff is mapped to a random color, furthermore, 
                    the number of classes is limited to make the interface more readable.           
                </p>
                <ProjectImages source1={'../images/interactive_canvas/segmentation.png'} description1={'Segmentation mask painted in the app.'}
                    source2={'../images/interactive_canvas/resultimg.png'} description2={'Image synthesized by the network.'} />

                <h2>Results</h2>
                <ProjectImage source={'../images/interactive_canvas/additional_result.png'} description={'Result of synthesized images compared to real image.'} />
                <BackButton />
            </ProjectInfo>
        </StyledMain>

    );
}

export default InteractiveCanvas;