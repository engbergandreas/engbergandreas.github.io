import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div `
    padding-top: var(--gap);
` 

function home() {
    return (
        <StyledMain>
        <h1>From home</h1>
        </StyledMain>
    );
}

export default home;