
import React from 'react'
import { Redirect } from 'react-router'
import Context from '../../context/index'

import styled from 'styled-components'
import Header from '../reusable/header'


const Index = ({ match }) => {
    const DATA = React.useContext(Context);

    let GETURL = match.url.replace('/cases/', '')
    let URLFILTER = DATA.contentProps.some(URL =>
        URL.caseTitle.toLowerCase().replace(/ +/g, "-") === GETURL
    )

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
                        <div className="pc__label">
                            <span>Experience</span>
                        </div>
                        <div className="pc_container__wrapper">
                            <div className="pc_wrap_column">
                                <h1>{JSON.stringify(match.params.caseId)}</h1>
                            </div>
                            <div className="pc_wrap_column">

                            </div>
                        </div>
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

export default Index