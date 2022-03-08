import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div `
    /*background: linear-gradient(90deg, #79938d, #496368);*/
    background: #121212;
    min-height: 89vh;
    padding-top: var(--gap);
    padding-bottom: var(--gap);
    color: white;
    

    & a {
        color: white;
        border-color: white;
    }
`

function MainContent({content}) {

    return (
        <StyledMain>
            {content}
        </StyledMain>
    )
}

export default MainContent