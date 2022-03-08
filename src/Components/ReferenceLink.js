import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    color: #000;
    border-bottom: 1px solid black;
`

function ReferenceLink({ reference, text}) {

    return (
        <StyledLink href={reference}>
            {text}
        </StyledLink>
    )
}

export default ReferenceLink