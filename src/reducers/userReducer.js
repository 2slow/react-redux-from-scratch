import {createReducer} from 'utils';
import rc from 'constants/redux-constants';

const initialState = {
    current: {
        data: null,
        error: null,
        loading: false,
        lastFetched: null,
        didInvalidate: false
    }
};

export default createReducer(initialState, {

    [rc.USER_LOAD]: (state, action) => {
        return {
            ...state,
            current: {
                ...state.current,
                loading: true
            }
        }
    },

    [rc.USER_LOAD_SUCCESS]: (state, action) => {
        return {
            ...state,
            current: {
                ...state.current,
                data: action.result,
                lastFetched: new Date().getTime(),
                loading: false
            }
        }
    },

    [rc.USER_LOAD_FAIL]: (state, action) => {
        return {
            ...state,
            current: {
                ...state.current,
                error: true,
                loading: false
            }
        }
    }
});