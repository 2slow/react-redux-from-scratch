import {createReducer} from 'utils';
import rc from 'constants/redux-constants';

const initialState = {
    locale: 'fr'
};


export default createReducer(initialState, {

    [rc.APPLICATION_SWITCH_LOCALE]: (state, action) => {
        return {
            ...state,
            locale: action.result
        }
    }
});