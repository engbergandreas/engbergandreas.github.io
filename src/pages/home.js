import React from 'react'
import styled from 'styled-components'
import Projects from './projects'

const StyledMain = styled.div `
    padding-top: var(--gap);
` 
const Banner = styled.div `
    display: flex;
    align-items: center;
    padding: 25px 0 0 100px;
`;
const Portrait = styled.img `
    height: 300px; 
    width: 300px;
    bakground: white;
    border-radius: 50%;
`;

const IntroName = styled.h1 `
    margin: 0;
    margin-left: 50px;
`

const Info = styled.div `
    width: 50%;
    margin-top: 50px;
    margin: 50px auto 0 auto;
`

function home() {
    return (
        <StyledMain className="mainContent">
            <Banner>
                <Portrait src="../images/me.png"></Portrait>
                <IntroName>Andreas Engberg</IntroName>
            </Banner>
            <Info>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate consectetur sem,
                    sit amet accumsan sem condimentum eu. Duis vel quam ligula. Quisque ipsum justo, convallis et eros in, fermentum cursus risus.
                    Nunc ullamcorper lobortis viverra. In maximus gravida ante non accumsan. In ac purus sed tortor laoreet aliquet.
                    Nullam gravida lobortis arcu non tincidunt. Phasellus viverra odio ex, sed facilisis nisl vehicula at.
                    Cras sollicitudin purus at orci iaculis, eget consequat arcu fringilla. 
                    Fusce vehicula orci sed velit mollis, quis egestas nibh sagittis.
                    Mauris metus augue, consectetur eget euismod ac, efficitur sit amet urna.
                    Nulla quis diam sit amet nunc convallis auctor. Curabitur enim nibh,
                    fermentum congue mi dictum at. </p> 
            </Info>
        </StyledMain>
    );
}

export default home;