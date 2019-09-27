
import * as React from 'react'
import styled from 'styled-components'
import Header from '../reusable/Header'
import List from './List'



const About = ({ history }) => {

    let items: readonly string[] = [
        'Creative Strategy',
        'Branding',
        'Innovative digital concept',
        'Copywrighting',
        'Tone of voice'
    ];


    //List Component
    const ListItemGrid:React.Component = ({ title }) => {
        return (
            <ul>
                <span style={{ color: '#fff' }}>{title}</span>
                { items.map((item, index) => <List key={index} listItem={item}></List> ) } 
            </ul>
        )
    }


    /* Inital Props */
    const getProps = {
        header: {
            brandDisplay: true,
            searchDisplay: false,
            closeText: 'close',
            onCloseTextClick: () => history.push('/')
        },
    }

    return (
        <Main>
            {/* <!--- Header --> */}
            <Header {...getProps.header} />

            {/* <!--- Content Container --> */}
            <Content>
                <Title>We Create Emotional, Meaningful & Innovative Digital Experience</Title>
                <FirstContent>
                    Immersive Garden has been recognized as Studio of the year 2017 by both AWWWARDS and CSS Design Awards. Our vision is focused on crafting in-house meaningful concepts and stories thanks to digital experiences. This translates in websites but also installations, apps or any media that is relevant. Immersive Garden’s focus on details allows to bring high-end experiences that merge innovation in design and in technology to offer a powerful digital presence to brands. Our experience and dedication has brought us to collaborate with international clients: they reach out to us from all parts of the globe, leading us to have 75% of our collaborations with companies abroad.
                </FirstContent>
                <SubTitle>In-house we design and develop sites, app & interactive installations</SubTitle>

                <ListItemGrid title="category" />
            </Content>
        </Main>
    )
}

const Main = styled.section`
            position: 'relative';
            background: #0c0c0d;
            min-height: 100vh;
            padding: 1px;
            overflow-y: scroll;
            height: 100vh;
            width: 100vw;
        `

const Content = styled.div`
            max-width: 880px;
            margin-bottom: 70px;
            margin-right: auto;
            margin-left: auto;
            width: 55.556%;
        `

const Title = styled.h1`
            margin-top: 55px;
            text-transform: uppercase;
            color: #a4a4a4;
            font-size: calc(31px + 19 * (100vw - 960px) / 960);
            font-family: 'serif';
            font-weight: 300;
            line-height: 1.607142857142857;
            letter-spacing: .1em;
            -webkit-font-smoothing: antialiased;
        `
const SubTitle = styled.h2`
            font-size: calc(26px + 0 * (100vw - 960px) / 960);
            line-height: 1.923076923076923;
            letter-spacing: .2em;
            margin-top: 140px;
            text-transform: uppercase;
            color: #a4a4a4;
            font-family: sans-serif;
        `

const FirstContent = styled.p`
            margin-top: 130px;
            color: #555;
            font-weight: 300;   
            font-size: calc(19px + 0 * (100vw - 960px) / 960);
            line-height: 2;
            letter-spacing: 0.05em;
        `

export default About