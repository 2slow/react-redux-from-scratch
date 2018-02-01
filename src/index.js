import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import {AppContainer} from 'react-hot-loader';
import Redbox from 'redbox-react'
import {BrowserRouter} from 'react-router-dom';
import App from 'layouts/App';
import PropTypes from 'prop-types'; // ES6

const initialState = window.__REDUX_STATE__ || {};
const store = configureStore(initialState);
const CustomErrorReporter = ({ error }) => <Redbox error={error} />
CustomErrorReporter.propTypes = {
    error: PropTypes.object
};
const renderApp = Component => {
    render(
        <AppContainer errorReporter={CustomErrorReporter}>
            <BrowserRouter>
                <Provider store={store}>
                    <Component/>
                </Provider>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderApp(App);

if (module.hot) {
    module.hot.accept('layouts/App', () => {
        const NextApp = require('layouts/App').default;
        renderApp(NextApp);
    });
}