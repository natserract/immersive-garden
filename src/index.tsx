import React from 'react';
import ReactDOM from 'react-dom';
import { ContextInterface, ContextProvider } from './context/index'
import Routes from './config/Routes'
import * as serviceWorker from './serviceWorker';
import './index.css';

const store: ContextInterface = {
    mainScroll: false
}

ReactDOM.render(
    <ContextProvider value={store}>
        <Routes/>
    </ContextProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
