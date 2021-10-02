import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
    width: 100%;
    height: auto;

`

function DemoVideo({ source, videotype }) {

    return (
        <StyledVideo controls>
            <source src={source} type={videotype} />
        </StyledVideo>
    )
}

export default DemoVideo