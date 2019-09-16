import React from 'react';
import ReactDOM from 'react-dom';
import { ContextInterface, ContextProvider } from './context/index'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import './index.css';

/* Pages */
import Home from './components/pages/home/'
import About from './components/pages/about/About'
import Cases from './components/pages/cases/'
import NotFound from './components/pages/404'

const store: ContextInterface = {
    mainScroll: false
}

ReactDOM.render(
    <ContextProvider value={store}>
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cases/:caseId" component={Cases} />
            <Route component={NotFound}/>
        </Router>,
    </ContextProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
