import rootReducer from '../reducers';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

export function configureStore () {
    const middleware = [];

    let createStoreWithMiddleware = compose(
        applyMiddleware(...middleware)
    )(createStore);

    return createStoreWithMiddleware(rootReducer, {});
}