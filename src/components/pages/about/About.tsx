
import React from 'react'
import styled from 'styled-components'
import Header from '../../reusable/Header'
import { withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'


const About = ({ history }) => {
    const headerProps = {
        brandDisplay: true,
        searchDisplay: false,
        closeText: 'close',
        onCloseTextClick: () => history.push('/')
    }

    return (
        <Container>
            <Header {...headerProps} />
        </Container>
    )
}

const Container = styled.section`
    position: 'relative';
    background: #0c0c0d;
    min-height: 100vh;
    padding: 1px;
`
export default withRouter(About)