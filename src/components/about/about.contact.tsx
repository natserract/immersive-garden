
import React from 'react'
import styled from 'styled-components'

type Props = {
    contactLists: any
}
const AboutContact = ({ contactLists }: Props) => (
    contactLists.map(
        (contactList, index) =>
            <ContactsItem key={index}>
                <a style={{ display: 'inline-block' }} href="hello@immersive-g.com" rel="nofollow noreferrer noopener" target="_blank">
                    <ContactsTitle>{contactList.title}</ContactsTitle>
                    <ContactsContent>
                        {contactList.content}
                    </ContactsContent>
                </a>
            </ContactsItem>
    )
)


/* Style */
const ContactsItem = styled.div`
    margin-top: 40px;
    
    &:first-child {
      margin-top: 0px;  
    }
`
const ContactsTitle = styled.h4`
    text-transform: uppercase;
    color: #a4a4a4;
    font-size: calc(13px + 0 * (100vw - 960px) / 960);
    line-height: 1.846153846153846;
    letter-spacing: .3em;
`
const ContactsContent = styled.span`
    transform: translateZ(0);
    opacity: .5;
    transition: opacity .1s cubic-bezier(.23,1,.32,1);
    will-change: transform;
    margin-top: 5px;
    display: inline-block;
    color: #a4a4a4;
    letter-spacing: .05em;
    font-size: calc(14px + 0 * (100vw - 960px) / 960);
    line-height: 1.785714285714286;
`
export default AboutContact