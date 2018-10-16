import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './views/Home';
import Commitments from './views/Commitments';

const Routes = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/commitments/:id' component={Commitments} />
            </Switch>
        </BrowserRouter>

    </main>
)

export default Routes
