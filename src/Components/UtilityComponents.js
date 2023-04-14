import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div `
    /*background: linear-gradient(90deg, #79938d, #496368);*/
    background: var(--primary-background-color);
    min-height: 89vh;
    padding-top: var(--gap);
    padding-bottom: var(--gap);
    color: white;
    

    & a {
        color: white;
        border-color: white;
    }
`

const ProjectInfo = styled.div `
    width: 65vw;
    margin: 0 auto;

    & p {
        text-align: justify;
    }
`
export { ProjectInfo };
export default StyledMain