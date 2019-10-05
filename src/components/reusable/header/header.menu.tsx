import React from 'react'
import styled from 'styled-components'
import source from '../../../config/MediaSource'

type Props = {
    visibilityHandler: string,
    closeThisMenu: () => void
}

const HeaderMenu = ({ visibilityHandler, closeThisMenu }: Props) => {
    const [state] = React.useState({
        name: [
            'Featured Projects',
            'Interactive Experience',
            'Corporate Sites / Branding',
            'Motions, Films & Photos',
            'All Projects'
        ]
    });


    const MenuName: typeof React.Component = () => (
        state.name.map((item, id) =>{
            return <MenuText onClick={() => console.log('Hello')} key={id}> { item } </MenuText>
        })
    )

    return (
        <MenuMain onClick={closeThisMenu} visibleStyled={visibilityHandler}>
            <MenuHeader onClick={closeThisMenu}>
                <Text>Close</Text>
            </MenuHeader>
            <MenuContainer>
                <MenuCategory>
                    <MenuWrapper>
                        <MenuName/>
                    </MenuWrapper>
                </MenuCategory>
            </MenuContainer>
        </MenuMain>
    )
}


/* Style */
const MenuMain = styled.section`
    opacity: 1;
    visibility: ${props => props.visibleStyled};
    transition: opacity .1s cubic-bezier(.23,1,.32,1),visibility .1s ease-out;
    will-change: opacity,visibility;
    position: fixed;
    width: 100%;
    background-color: #f7f7f7;
    z-index: 999;
`
const MenuHeader = styled.div`
    cursor: pointer;
    position: absolute;
    top: 70px;
    left: 5.55556vw;
    z-index: 3;
`
const Text = styled.span`
    font-size: calc(10px + 0 * (100vw - 960px) / 960);
    line-height: 1.5;
    letter-spacing: .2em;
    font-weight: 700;
    text-transform: uppercase;
`
const MenuContainer = styled.div`
    transform: translateZ(0);
    min-height: 100vh;
    padding-top: 140px;
    padding-right: 5.55556vw;
    padding-left: 5.55556vw;
    cursor: default;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    cursor: url(${source.global.cursorMenu}) 16 16,pointer;
    will-change: transform;
    overflow-y: scroll;
`

const MenuCategory = styled.div`
    color: #000;
    margin-top: 20px;
    transform: translateZ(0);
    color: #a4a4a4;
    transition: color .5s cubic-bezier(.23,1,.32,1);
    will-change: color;

    &:first-child {
        margin-top: 0;
    }
`
const MenuWrapper = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;
`

const MenuText = styled.span`
    font-size: calc(34px + 26 * (100vw - 960px) / 960);
    line-height: 1.5;
    letter-spacing: .2em;
    font-family: Freight,"serif";
    text-transform: uppercase;
    font-weight: 300;
    display: block;

    &:not(:first-child){
        margin-top: 20px;
    }
`


export default HeaderMenu