import React from 'react'
import styled from 'styled-components'

const InfoWrapper = styled.div`
    position: absolute;
    left: 0;
    font-style: italic;
    padding: 25px;
`
const StyledUL = styled.ul`
    margin: 0;
    padding: 0;
`

function QuickInfo({ typeinfo }) {
    return (
        <InfoWrapper>
            <StyledUL type="circle">
                {
                    typeinfo.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </StyledUL>
        </InfoWrapper>
    )
}

export default QuickInfo