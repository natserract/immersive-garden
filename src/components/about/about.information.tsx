import React from 'react'
import styled from 'styled-components'

type ConstructProps = {
    infoTitle: string,
    children: React.ReactNode
}

const AboutInformation = ({ infoTitle, children }: ConstructProps) => (
    <React.Fragment>
        <MapSection infoTitle={infoTitle} children={children} />
        <PhoneSection />
        <SocialMediaSection />
    </React.Fragment>
)

const MapSection = ({ infoTitle, children }: ConstructProps) => (
    <MapLink href="https://goo.gl/maps/xQJnhd9ihVr" target="_blank" rel="noopener noreferrer nofollow">
        <Title>{infoTitle}</Title>
        <ContentInfo>
            {children}
        </ContentInfo>
    </MapLink>
)

const PhoneSection = () => (
    <Phone href="tel:+33 (0)1 75 50 05 85" target="_blank" rel="noopener noreferrer nofollow">
        <PhoneText>+33 (0)1 75 50 05 85</PhoneText>
    </Phone>
)

const SocialMediaSection = () => (
    <div>
        <Separator />
        <SocialMediaLists>
            <SocialMediaLink href="https://www.facebook.com/immersive.g/" label="facebook" />
            <SocialMediaLink href="https://twitter.com/Immersive_g" label="twitter" />
            <SocialMediaLink href="https://www.behance.net/immersive-g" label="behance" />
            <SocialMediaLink href="https://www.linkedin.com/company/immersive-garden/" label="linkedIn" />
        </SocialMediaLists>
    </div>
)

const SocialMediaLink = ({ href, label }: { href: string, label: string }) => (
    <SCList>
        <a href={href} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
    </SCList>
)

//Style
const Title = styled.h4`
    color: #a4a4a4;
    letter-spacing: .05em;
    font-size: calc(14px + 0 * (100vw - 960px) / 960);
    line-height: 1.785714285714286;
`
const MapLink = styled.a`
    display: inline-block; 
    position: relative;
`
const ContentInfo = styled.div`
    letter-spacing: .05em;
    color: #555;
    font-size: calc(14px + 0 * (100vw - 960px) / 960);
    line-height: 1.785714285714286;
    margin-top: 5px;
`
const Phone = styled.a`
    transform: translateZ(0);
    opacity: .5;
    transition: opacity .1s cubic-bezier(.23,1,.32,1), color .2s ease;
    will-change: opacity;
    margin-top: 10px;
    position: relative;
    display: inline-block;
    color: #a4a4a4;

    &:hover {
        color: #fff;
    }
`
const PhoneText = styled.span`
    font-size: calc(14px + 0 * (100vw - 960px) / 960);
    line-height: 1.785714285714286;
    letter-spacing: .05em;
`
const Separator = styled.div`
    height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: .5;
    width: 60%;
    background-color: #555;
`
const SocialMediaLists = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    -webkit-margin-before: 0;
    text-decoration: none;
`
const SCList = styled.li`
    color: #555;    
    letter-spacing: .05em;
    font-size: calc(14px + 0 * (100vw - 960px) / 960);
    line-height: 1.785714285714286;
    margin: 0;
`
export default AboutInformation