import {createReducer} from 'utils';
import rc from 'constants/redux-constants';

const initialState = {
    user: {
        data: null,
        error: null,
        loading: false
    },
    counter: 0
};


export default createReducer(initialState, {

    [rc.APPLICATION_USER_LOAD]: (state, action) => {
        return {
            ...state,
            user: {
                ...state.user,
                loading: true
            }
        }
    },

    [rc.APPLICATION_USER_LOAD_SUCCESS]: (state, action) => {
        return {
            ...state,
            user: {
                ...state.user,
                data: action.result,
                loading: false
            }
        }
    },

    [rc.APPLICATION_USER_LOAD_FAIL]: (state, action) => {
        return {
            ...state,
            user: {
                ...state.user,
                error: true,
                loading: false
            }
        }
    },

    [rc.APPLICATION_COUNTER_ADD]: (state, action) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
});