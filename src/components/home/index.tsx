import React from "react";
import styled from 'styled-components'
import Context from '../../context'

import Header from "../reusable/header/header";
import Banner from './home.banner'
import HomeNews from './home.news'
import Content from './home.content'
import Menu from '../reusable/header/header.menu'

const Index = () => {
    const ContextConsumer = React.useContext(Context);

    const [move, setMove] = React.useState({
        color: 10,
        transform: true,
        newTransform: false,
        mainTransform: false,
        visible: false,
    });

    const handlerChange = (action) => {
        switch (action.type) {
            case 'FIRST':
                toggleTransform();
                break;
            case 'SECOND':
                toggleMainTransform();
                break;
            case 'VISIBLE':
                toggleVisibility();
                break;
            default:
                return false;
        }
    }

    const toggleTransform = () => {
        setMove((prevState) => ({
            ...prevState,
            transform: !prevState.transform,
            newTransform: !prevState.newTransform,
        }));
    };

    const toggleMainTransform = () => {
        setMove((prevState) => ({
            ...prevState,
            mainTransform: !prevState.mainTransform,
        }));
    };

    const toggleVisibility = () => {
        setMove((prevState) => ({
            ...prevState,
            visible: !prevState.visible,
        }));
    };

    const newTransformStyle = calculateNewTransformStyle(move);
    const pushClassEl = move.mainTransform ? 'home-bg-active' : null;
    const changeColorEl = move.mainTransform ? 'active' : null;
    const searchVisibility = move.mainTransform;
    const menuVisibility = move.visible ? 'block' : 'none';

    const calculateNewTransformStyle = (move) => {
        if (move.transform) {
            return '-100%';
        } else if (move.newTransform) {
            return 'translateY(-100%)';
        } else if (move.mainTransform) {
            return 'translateY(-200%)';
        }
        return '';
    };

    const formatCaseTitle = (title) => {
        return title.toLowerCase().replace(/ +/g, "-");
    };

    const CaseContent = () => 
        ContextConsumer.contentProps.map((item, id) => {
            let url = formatCaseTitle(item.caseTitle);
            return <Content key={id} pathTo={url} {...item} />
    })

    const props = {
        headerProps: {
            to: '/about-us',
            menuName: 'About Us',
            headerSearchVisibility: searchVisibility,
            getClass: changeColorEl,
            headerShowCategory: () => handlerChange({ type: 'VISIBLE' }),
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
            menuDisplay: menuVisibility,
            closeThisMenu: () => handlerChange({ type: 'VISIBLE' })
        }
    }

    return (
        <HomeMain>
            <Header {...props.headerProps}/>
            <HomeContainer className={pushClassEl}>
                <Banner {...props.bannerProps} />
                <HomeNews  {...props.homeNewsProps} />
                <SectionScroller style={props.bannerProps.style}>
                    <ContentSection>
                        <CaseContent />
                    </ContentSection>
                </SectionScroller>
            </HomeContainer>
            <Menu {...props.menuProps} />
        </HomeMain>
    )
}

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

    @media (max-width: 980px){
        max-width: 100%;
        padding-left: 0;
        padding-right: 0;
    }
`

export default Index