
import React from 'react'
import styled from 'styled-components'

type Props = {
    title?: string,
    lists: any,
    additionStyle?: object
}

const List = ({ title, lists, additionStyle }: Props) => {
    return (
        <ul style={{ listStyle: 'none' }}>
            <TitleColumn>{title}</TitleColumn>
            { lists.map((list, index) =>
                <ListItem key={index} style={additionStyle}>{list}</ListItem>
            )}
        </ul>
    )
}


/* Styles */
const ListItem = styled.li`
    font-size: calc(20px + 0 * (100vw - 960px) / 960);
    line-height: 2;
    letter-spacing: 0;
    color: #555;

    &:nth-child(2){
        margin-top: 40px;
    }
    &:not(:nth-child(2)){
        margin-top: 10px;
    }
`
const TitleColumn = styled.h4`
            text-transform: uppercase;
            color: #a4a4a4;
            font-size: calc(13px + 0 * (100vw - 960px) / 960);
            line-height: 1.846153846153846;
            letter-spacing: .3em;
            font-family: sans-serif;
`

export default List