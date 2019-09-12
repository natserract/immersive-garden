
import React from "react";
import Header from '../../reusable/header/Header'

import { ContextProvider, ContextInterface } from '../../context/'

const store: ContextInterface = {
    mainScroll: false
}

const Index = () => {
    return (
        <ContextProvider value={store}>
            <Header/>   
        </ContextProvider>
    )
}

export default Index