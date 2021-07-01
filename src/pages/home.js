import React from 'react'
import styled from 'styled-components'
import Projects from './projects'

const StyledMain = styled.div `
    padding-top: var(--gap);
` 

function home() {
    return (
        <StyledMain className="mainContent">
            HEJ from HOME
        </StyledMain>
    );
}

export default home;