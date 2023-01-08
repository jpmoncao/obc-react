import React from 'React'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { PlanetsScreen } from './screens/planets'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PlanetsScreen} />
        </Switch>
    </BrowserRouter>
)