
import React from 'react'
import styled from 'styled-components'

type Props = {
    title?: string
    listItem: string,
}

const List = ({ title, listItem }: Props) => {
    return (
        <Main>
            <Title>{title}</Title>
            <ListItem>{listItem}</ListItem>
        </Main>
    )
}


/* Styles */
const Main = styled.li`
    list-style: none;
`

const Title = styled.span`
    text-transform: uppercase
`
const ListItem = styled.li`
    margin-top: 40px;
    font-size: calc(20px + 0 * (100vw - 960px) / 960);
    line-height: 2;
    letter-spacing: 0;
    color: #555;
`
export default List