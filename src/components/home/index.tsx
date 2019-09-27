
import React from "react";
import styled from 'styled-components'
import Context from '../../context'

import Header from "../reusable/Header";
import Banner from './Banner'
import HomeNews from './HomeNews'
import Content from './Content'
import Menu from '../reusable/Menu'


const Index = () => {
    const STATE = React.useContext(Context);

    const [move, setMove] = React.useState({
        color: 10,
        transform: true,
        newTransform: false,
        mainTransform: false,
        visible: false,
    });


    //handlerChange
    const handlerChange = (action) => {
        switch (action.type) {
            case 'FIRST': {
                setMove({
                    transform: !move.transform,
                    newTransform: !move.newTransform,
                });
                break
            }
            case 'SECOND': {
                setMove({
                    mainTransform: !move.mainTransform
                })
                break
            }
            case 'VISIBLE': {
                setMove({
                    visible: !move.visible
                })
                break
            }
            default: {
                return false
            }
        }
    }


    //state conditions
    let newTransformStyle =
        move.transform ? (move.transform = '-100%') : (move.newTransform ?
            (move.newTransform = 'translateY(-100%)') : (move.mainTransform = 'translateY(-200%)'));

    let pushClassEl = move.mainTransform ? 'home-bg-active' : null,
        changeColorEl = move.mainTransform ? 'active' : null,
        searchVisibility = move.mainTransform ? true : false,
        menuVisibility = move.visible ? 'visible' : 'hidden';


    const CaseContent:typeof React.Component = () => 
        STATE.contentProps.map((item, id) => {
            let url = item.caseTitle.toLowerCase().replace(/ +/g, "-");
            return <Content key={id} pathTo={url} {...item} />
    })

    //Initial props
    const props = {
        headerProps: {
            to: '/about-us',
            menuName: 'About Us',
            brandDisplay: false,
            searchDisplay: searchVisibility,
            getClass: changeColorEl,
            showCategory: () => handlerChange({ type: 'VISIBLE' })
        },
        bannerProps: {
            onClick: () => handlerChange({ type: 'FIRST' }),
            style: { transform: newTransformStyle }
        },
        homeNewsProps: {
            onClick: () => handlerChange({ type: 'SECOND' }),
            style: { transform: newTransformStyle }
        },
        menuProps: {
            visibilityHandler: menuVisibility,
            closeThisMenu: () => handlerChange({ type: 'VISIBLE' })
        }
    }


    return (
        <HomeMain>
            {/* {<!-- Header --> */}
            <Header {...props.headerProps}/>

            {/* {<!-- Container --> */}
            <HomeContainer className={pushClassEl}>
                <Banner {...props.bannerProps} />
                <HomeNews  {...props.homeNewsProps} />

                {/* {<!-- Scrolled content --> */}
                <SectionScroller style={props.bannerProps.style || props.homeNewsProps.style}>
                    <ContentSection>
                        <CaseContent />
                    </ContentSection>
                </SectionScroller>
            </HomeContainer>

            <Menu {...props.menuProps} />
        </HomeMain>
    )
}


/* Style */
const HomeMain = styled.div`
    position: relative
`
const HomeContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #000;

    &.home-bg-active{
        background: #f7f7f7;
    }
`
const SectionScroller = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    will-change: transform, background-color;
    transition: transform 1s cubic-bezier(.23, 1, .32, 1) !important;
`

const ContentSection = styled.div`
    max-width: 1866.66667px;
    min-height: 100vh;
    padding-top: 130px;
    padding-bottom: 130px;
    overflow-x: hidden;
    margin-right: auto;
    margin-left: auto;
    padding-right: 5.556%;
    padding-left: 5.556%;
`

export default Index