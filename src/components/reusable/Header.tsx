
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import source from '../../config/MediaSource'
import FlexDisplay from './FlexDisplay'

type Props = {
    to?: string,
    menuName?: string,
    getClass?: any,
    src?: string,
    brand?: any,
    brandDisplay, searchDisplay?: boolean,
    showCategory?: any,
    closeText?: string,
    onCloseTextClick?: () => void
}


const Header = ({ to, menuName, getClass, brandDisplay, searchDisplay, showCategory, closeText, onCloseTextClick }: Props) => {

    //Show Menu Or Not
    const MenuName:typeof React.Component = () => menuName ? (
        <Links to={to} className={getClass}>{menuName}</Links>) : (
        <CloseText onClick={onCloseTextClick}>{closeText}</CloseText>
    )

    return (
        <HeaderMain>
            <FlexDisplay justify='space-between' align='center'>
                <HeaderColumn>
                    {/* <!--- Brand - About Page ---> */}
                    <Brand brandVisibility={brandDisplay}>
                        <Link to="/" style={{ marginTop: '7px' }}>
                            <img style={{ width: '100%' }}
                                alt="Immersive Garden - Logotype"
                                title="Immersive Garden - Logotype"
                                src={source.global.logoSmall}
                            />
                        </Link>
                    </Brand>

                    {/* <!--- Search ---> */}
                    <Search searchVisibility={searchDisplay} onClick={showCategory} >
                        <FlexDisplay align='center'>
                            <Circle></Circle>
                            <Text>Search By</Text>
                        </FlexDisplay>
                    </Search>
                </HeaderColumn>

                <HeaderColumn>
                    <HeaderMenu>
                        <MenuName />
                    </HeaderMenu>
                </HeaderColumn>
            </FlexDisplay>
        </HeaderMain>
    )
}

const HeaderMain = styled.header`
    height: 20px;
    width: 89%;
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
`
const HeaderMenu = styled.div`
    text-align: right;
`
const Links = styled(Link)`
    color: #555;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.8;
    letter-spacing: .34em;
    text-transform: uppercase;
    width: 110px;
    float: right;
    transition: color 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.active {
        color: #0c0c0d;
    }
`
const CloseText = styled.span`
    color: #555;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.8;
    letter-spacing: .34em;
    text-transform: uppercase;
    width: 110px;
    float: right;
    transition: color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
`
const HeaderColumn = styled.div`
    width: 14.286%;
`
const Brand = styled.div`
    position: relative;
    float: left;
    display: ${props => props.brandVisibility ? 'block' : 'none'}
`


//Search
const Search = styled.div`
    margin-left: -42px;
    cursor: pointer;
    visibility: ${props => props.searchVisibility ? 'visible' : 'hidden'};
    transition: opacity .5s cubic-bezier(.23,1,.32,1), visibility .5s;
    will-change: opacity,visibility;
`
const Circle = styled.div`
    width: 18px;
    height: 18px;
    border: 2px solid #a4a4a4;
    border-radius: 50%;
`
const Text = styled.span`
    color: #a4a4a4;
    text-transform: uppercase;
    font-weight: 700;
    font-size: calc(8.9px + 0 * (100vw - 960px) / 960);
    line-height: 1.5;
    letter-spacing: .2em;
    margin-left: 20px;
`

export default Header