
import React from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'

import Context from '../../context/'
import Header from '../reusable/header'
import FlexDisplay from '../reusable/layout/flex.reusable'
import CasesWrapperTitle from './cases.wrapper.title'
import CaseCredits from './cases.credits'


const Index = ({ match }) => {
    const ContextConsumer = React.useContext(Context);

    let GETURL = match.url.replace('/cases/', '')
    let URLFILTER = ContextConsumer.contentProps.some(URL =>
        URL.caseTitle.toLowerCase().replace(/ +/g, "-") === GETURL
    )

    let GetCaseContext = ContextConsumer.contentProps.find(val => {
        return val.caseTitle.toLowerCase().replace(/ +/g, "-") === GETURL
    })


    let caseCreditItem = [
        {
            title: 'Role',
            desc: ['Conception', 'Art direction', 'Motion design', 'Development']
        },
        {
            title: 'Agency',
            desc: ['Havas']
        },
        {
            title: 'Awards',
            desc: ['FWA of the Month', 'Awwwards Site of the Month', 'CSS Design Award Site of the Day']
        }
    ]


    let Props = {
        headerProps: {
            to: '/about-us',
            menuName: 'About Us',
            addClass: "is-color-black",
            backLinkVisibility: true,
        }
    }



    return (
        // <!--Redirect if parameter values not correctly-->
        !URLFILTER ? (<Redirect to='/' />) : (
            <React.Fragment>
                <Header {...Props.headerProps} />

                <PCaseSection>
                    <Container>
                        <PCaseHeader>
                            <Text>Experience</Text>
                        </PCaseHeader>

                        <FlexDisplay addStyle={{ marginTop: '60px' }}>
                            <ContentColumn>
                                <CasesWrapperTitle
                                    caseTitle={GetCaseContext.caseTitle}
                                    caseDesc={GetCaseContext.caseDescription}
                                />
                            </ContentColumn>
                            <ContentColumn>
                                <CaseCreditsMain>
                                    <CaseCredits
                                        caseLiveUrl={GetCaseContext.url}
                                        caseCreditItem={caseCreditItem}
                                    />
                                </CaseCreditsMain>
                            </ContentColumn>
                        </FlexDisplay>

                    </Container>
                </PCaseSection>
            </React.Fragment>)
    )

}

/* Style */
const PCaseSection = styled.section`
    background-color: #f7f7f7;
    padding: 1px;
    width: 100%;
    height: 100vh;
    overflow: auto;
`
const Container = styled.div`
    margin-top: 33.33333vh;
    margin-bottom: 200px;
    max-width: 1400px;
    width: 66.667%;
    margin-right: auto;
    margin-left: auto;
`

const PCaseHeader = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 30%;
`
const Text = styled.span`
    text-transform: uppercase;
    color: #a4a4a4;
    font-weight: 700;
    font-size: calc(10px + 0 * (100vw - 960px) / 960);
    line-height: 1.5;
    letter-spacing: .2em;
`
const ContentColumn = styled.div`
    width: 50%;
`
const CaseCreditsMain = styled.aside`
    margin-top: 20px;
    display: block;
    padding-left: 32%;
`


export default Index