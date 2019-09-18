import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './context/index'
import Routes from './config/Routes'
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <ContextProvider>
        <Routes/>
    </ContextProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
