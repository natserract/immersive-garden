
import React from "react";
import styled from 'styled-components'
import Context from '../../../context'

import Header from "../../reusable/header/Header";
import Banner from './Banner'
import HomeNews from './HomeNews'
import Content from './Content'


//Initial props
const PROPS = {
    headerProps: {
        menuName: 'About Us',
        to: 'about-us'
    },
}


const Index: React.SFC = () => {
    const STATE = React.useContext(Context);

    const [move, setMove] = React.useState({
        color: 'red',
        transform: true,
        newTransform: false,
        mainTransform: false
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
        changeColorEl = move.mainTransform ? 'active' : null


    const CaseContent = () => STATE.contentProps.map((item, id) => {
        let url = item.caseTitle.toLowerCase().replace(/ +/g, "-");
        return <Content key={id} pathTo={url} {...item} />
    })



    return (
        <HomeMain>
            {/* {<!-- Header --> */}
            <Header {...PROPS.headerProps} getClass={changeColorEl} />

            {/* {<!-- Container --> */}
            <HomeContainer className={pushClassEl}>
                <Banner onClick={() => handlerChange({ type: 'FIRST' })} style={{ transform: newTransformStyle }} />
                <HomeNews onClick={() => handlerChange({ type: 'SECOND' })} style={{ transform: newTransformStyle }} />
                
                {/* {<!-- Scrolled content --> */}
                <SectionScroller style={{ transform: newTransformStyle }}>
                    <ContentSection>
                        <CaseContent/>
                    </ContentSection>
                </SectionScroller>
            </HomeContainer>
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