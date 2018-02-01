import {createReducer} from 'utils';
import rc from 'constants/redux-constants';

const initialState = {
    counter: 0
};

export default createReducer(initialState, {

    [rc.APPLICATION_COUNTER_ADD]: (state, action) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
});
