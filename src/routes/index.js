import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from 'layouts/App';
import {User, Counter} from 'components';

export default (store) => {
    return (
        <Route path='/' component={App}>
            <IndexRedirect to="/counter" />
            <Route path="counter" component={Counter} />
            <Route path="user" component={User} />
        </Route>
    );
};
