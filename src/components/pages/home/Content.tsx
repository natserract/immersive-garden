import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    caseTitle: string,
    caseDescription: string,
    poster: string,
    title: string,
    source: string,
    linkTo?: string,
    pathTo: any
}

const Content = ({ caseTitle, caseDescription, poster, title, source, pathTo }: Props) => (
    <CaseContainer>
        <CaseColumnLeft>
            <Span>Experience</Span>
        </CaseColumnLeft>
        <CaseColumnCenter>
            <Links to={`/cases/${pathTo}`}>
                <CaseMedia>
                    <video preload="auto" autoPlay={true} loop={true} poster={poster} title={title}>
                        <source src={source} type="video/mp4"></source>
                    </video>
                </CaseMedia>
                <CaseContent>
                    <Heading>{caseTitle}</Heading>
                    <Description>{caseDescription}</Description>
                </CaseContent>
            </Links>
        </CaseColumnCenter>
    </CaseContainer>
)

/* Styles */
const CaseContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:first-child){
        margin-top: 280px;
    }
`

const CaseColumnLeft = styled.div`
    width: 12.5%;
`
const Span = styled.span`
    color: #a4a4a4;
    text-transform: uppercase;
    font-weight: 700;
    font-size: calc(9px + 0 * (100vw - 960px) / 960);
    line-height: 1.5;
    letter-spacing: .2em;
`
const CaseColumnCenter = styled.div`
    width: 81.25%;
`

const Links = styled(Link)`
    display: flex;
    flex-direction: row;
`
const CaseMedia = styled.div`
    width: 61.538%;
    position: relative;
    overflow: hidden;
`

const CaseContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30.769%;
    margin-left: 7.692%;
`

const Heading = styled.h3`
    font-weight: 300;
    font-size: calc(36px + 0 * (100vw - 960px) / 960);
    line-height: 1.25;
    letter-spacing: .05em;
`

const Description = styled.p`
    font-size: 13px;
    width: 90%;
    color: #a4a4a4;
    letter-spacing: .05em;
    line-height: 2;
    margin-top: 40px;
`

export default Content
