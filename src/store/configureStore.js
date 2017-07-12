import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {asyncRequest} from '../middlewares/asyncRequest';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

export function configureStore () {
    const middleware = [thunk, asyncRequest];

    return createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );
}