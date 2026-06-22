import React, { createContext } from 'react';
import MediaSource from '../config/MediaSource';

export interface ContextInterface {
    mainScroll: boolean;
    contentProps: object;
}

//Create Context  
const Context: any = createContext<ContextInterface | null>(null);

const createContentProps = () => [
    createContentProp(
        'The new Mobile Workforce',
        'Race Day requires optimal performance. Take a look at how the Citrix team uses data to analyze, model, & design the car.',
        MediaSource.poster.project1,
        'Immersive Garden - The new Mobile Workforce',
        MediaSource.video.case1,
        'https://thenewmobileworkforce.imm-g-prod.com/',
        MediaSource.cases.caseProject1
    ),
    createContentProp(
        'Rainforest foods',
        'A website to discover the experience of superfoods of Rainforest',
        MediaSource.poster.project2,
        'Immersive Garden - Rainforest foods',
        MediaSource.video.case2,
        'https://www.rainforestfoods.com/experience/#!/',
        MediaSource.cases.caseProject2
    ),
    createContentProp(
        'You are the Stylist',
        "Experience Broken Back's interactive music video where you are the stylist. Click and chose our look to discover the story.",
        MediaSource.poster.project3,
        'Immersive Garden - You are the Stylist',
        MediaSource.video.case3,
        'https://youarethestylist.imm-g-prod.com/',
        MediaSource.cases.caseProject3
    ),
    createContentProp(
        'ACME Experience',
        "Born 40 years ago when Dubai was only a desert, Acme is today one of the most competitive storage solutions provider worldwide.",
        MediaSource.poster.project4,
        'Immersive Garden - ACME Experience',
        MediaSource.video.case4,
        'http://acme-experience.com/',
        MediaSource.cases.caseProject4
    ),
    createContentProp(
        'Zero Days Off',
        `"How do we live a full life?" Discover the story of Edward Stevenson's fight against chronic pain. This experience introduces his book about the keys to better living..`,
        MediaSource.poster.project5,
        'Immersive Garden - ACME Experience',
        MediaSource.video.case5,
        'http://zerodaysoff.co.uk/',
        MediaSource.cases.caseProject5
    ),
    createContentProp(
        'Gleec',
        `Explore Gleec Chat's experience to promote the application and discover all its secured functionalities.`,
        MediaSource.poster.project6,
        'Immersive Garden - ACME Experience',
        MediaSource.video.case6,
        'https://gleec.com/',
        MediaSource.cases.caseProject6
    ),
];

const createContentProp = (
    caseTitle: string,
    caseDescription: string,
    poster: string,
    title: string,
    source: string,
    url: string,
    caseImgDetail: string
) => ({
    caseTitle,
    caseDescription,
    poster,
    title,
    source,
    url,
    caseImgDetail
});

const store: ContextInterface = {
    mainScroll: false,
    contentProps: createContentProps()
};

//Create provider
export const ContextProvider = ({ children }: any) => {
    return (
        <Context.Provider value={{ ...store }}>
            {children}
        </Context.Provider>
    );
};

export default Context;