
import React, { createContext } from 'react'

export interface ContextInterface {
    mainScroll: boolean
}

//Create Context  
const Context:any = createContext<ContextInterface | null>(null);

export const ContextProvider = ({ children }: any) => {
    return (
        <Context.Provider>
            { children }
        </Context.Provider>
    )
}
