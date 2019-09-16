
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Pages */
import Home from '../components/pages/home'
import About from '../components/pages/about/About'
import Cases from '../components/pages/cases/'
import NotFound from '../components/pages/404'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cases/:caseId" component={Cases} />
            <Route exact component={NotFound} />
        </Switch>
    </Router>
)

export default Routes