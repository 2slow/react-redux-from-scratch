import React from 'react';
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router';
import { createRoutes } from 'react-router/lib/RouteUtils';
import routes from 'routes'

console.log('routes', routes())
console.log('createRoutes', createRoutes(routes()))
const Root = ({ store}) => (
    <Provider store={store}>
        <Router history={browserHistory} routes={createRoutes(routes())} />
    </Provider>
);
export default Root;