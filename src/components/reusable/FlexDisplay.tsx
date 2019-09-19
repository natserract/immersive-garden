import React from 'react'
import styled from 'styled-components'

type Props = {
    children: any,
    justify?: 'center' | 'space-between',
    align?: 'center' | 'flex-end'
}

const Flex = ({ children, justify, align }: Props) => {
    let GETPROPS = {
        justifyContentStyled: justify,
        alignItemsStyled: align
    }

    return (
        <FlexContainer { ...GETPROPS }>
            { children }
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContentStyled};
    align-items: ${props => props.alignItemsStyled};
`

export default Flex