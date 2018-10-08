import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'
import Dashboard2 from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

import App from './app'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Dashboard2} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>


        <Redirect from='*' to='/' />
    </Router>
)