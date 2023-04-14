import React from 'react'
import styled from 'styled-components'
import Projects from './projects'
import { NavLink } from 'react-router-dom';
import ReferenceLink from '../Components/ReferenceLink';
import StyledMain from '../Components/UtilityComponents';

const Banner = styled.div`
    display: flex;
    align-items: center;
    padding: 25px 0 0 100px;
`;
const Portrait = styled.img`
    height: 300px; 
    width: 300px;
    bakground: white;
    border-radius: 50%;
`;

const IntroName = styled.h1`
    margin: 0;
    font-size: 2.8em;
    letter-spacing: -2px;
    line-height: 55px;
`;

const Info = styled.div`
    width: 50%;
    margin-top: 50px;
    margin-left: 450px;
`;
const Wrapper = styled.div`
    margin: 0;
    margin-left: 50px;
    text-align: center;
`

function home() {
    return (
        <StyledMain>
            <Banner>
                <Portrait src="../images/me.png"></Portrait>
                <Wrapper>
                    <IntroName>Andreas Engberg</IntroName>
                    <div>Rolig * Skojig * Kul</div>
                </Wrapper>
            </Banner>
            <Info>
                <p>
                    Hi! I am Andreas Engberg and currently studying my 4:th year in  MSc in Media Technology and Engineering at Linköpings University.
                    I am passionate coder with extra love for computer graphic, image processing & analysis and SFX.
                    <br></br>
                    I'm focusing my master profile towards courses which will further my competens 
                    within C++ programming, computer graphics techniques, machine learning & AI. You can find the complete 
                    list of all courses on my <ReferenceLink reference={'https://www.linkedin.com/in/andreas-engberg/'} text={'LinkedIn profile'}></ReferenceLink>. 
                </p>
                <p>
                    Here you will find some of the projects I have worked on during my time at Linköpings University
                    as well as some of my personal projects during my spare time.
                    This site is very much a work in progress and Im continuously updating the projects descriptions. My goal is that 
                    every project listed will have a blog type information about the development, thought process or problems that
                    occured or otherwise had to be solved.

                </p>
                <p>
                    You can checkout my projects <NavLink to="/projects"> here</NavLink>
                </p>
            </Info>
        </StyledMain>
    );
}

export default home;