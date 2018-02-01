import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import {asyncRequest} from '../middlewares/asyncRequest';
import {
    applyMiddleware,
    createStore
} from 'redux';

export function configureStore (initialState = {}) {
    const middleware = [thunk, asyncRequest];

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}