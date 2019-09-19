
import React from 'react'
import styled from 'styled-components'
import Header from '../../reusable/header/Header'

const headerProps = {
    to: '/',
    menuName: 'close',
    display: true
}

const About = () => {
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
export default About