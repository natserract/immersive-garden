
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import source from '../../../config/MediaSource'

interface Props {
    to: string,
    menuName: string,
    getClass?: any,
    src?: string,
    brand?: any,
    display: boolean
}

const Header = ({ to, menuName, getClass, display }: Props) => {
    return (
        <HeaderMain>
            <Brand itemVisibility={display}>
                <Link to="/">
                    <img style={{ width: '100%' }}  alt="Immersive Garden - Logotype" src={source.global.logoSmall}></img>
                </Link>
            </Brand>
            <HeaderMenu>
                <HeaderItem to={to} className={getClass}>
                    {menuName}
                </HeaderItem>
            </HeaderMenu>
        </HeaderMain>
    )
}

const HeaderMain = styled.div`
    height: 20px;
    width: 89%;
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
`
const HeaderMenu = styled.div`
    text-align: right;
`
const HeaderItem = styled(Link)`
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
const Brand = styled.div`
    width: 14.286%;
    position: relative;
    float: left;
    display: ${props => props.itemVisibility ? 'block' : 'none'}
`

export default Header