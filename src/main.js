'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import {configureStore} from './store/configureStore';
import PropTypes from 'prop-types';

const target = document.getElementById('root');
const store = configureStore();



const root = (
    <Root store={store}/>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

ReactDOM.render(root, target);