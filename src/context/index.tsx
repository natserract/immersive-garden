
import React, { createContext } from 'react'
import MediaSource from '../config/MediaSource'

export interface ContextInterface {
    mainScroll: boolean,
    contentProps: object
}

//Create Context  
const Context:any = createContext<ContextInterface | null>(null);

const store: ContextInterface = {
    mainScroll: false,
    contentProps: [
        {
            caseTitle: 'The new Mobile Workforce',
            caseDescription: 'Race Day requires optimal performance. Take a look at how the Citrix team uses data to analyze, model, & design the car.',
            poster: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/02/23/5a905583ad08aCitrix-Thumb.jpg',
            title: 'Immersive Garden - The new Mobile Workforce',
            source: MediaSource.video.case1,
            url: 'https://thenewmobileworkforce.imm-g-prod.com/',
        },
        {
            caseTitle: 'Rainforest foods',
            caseDescription: 'A website to discover the experience of superfoods of Rainforest',
            poster: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/03/12/5aa65989358c8Rainforest-Thumb.jpg',
            title: 'Immersive Garden - The new Mobile Workforce',
            source: MediaSource.video.case2,
            url: 'https://this.groove.agency',
        },
        {
            caseTitle: 'You are the Stylist',
            caseDescription: "Experience Broken Back's interactive music video where you are the stylist. Click and chose our look to discover the story.",
            poster: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/02/26/5a93f5f926c34BrokenBack-Thumb.jpg',
            title: 'Immersive Garden - You are the Stylist',
            source: MediaSource.video.case3,
            url: 'https://behance.net',
        },
    ]
}

//Create provider
export const ContextProvider = ({ children }: any) => {
    return (
        <Context.Provider value={{...store}}>
            { children }
        </Context.Provider>
    )
}

export default Context