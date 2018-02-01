import rc from 'constants/redux-constants';
import Services from 'services'
// Async action
export function loadUser (locale, forceLocale) {
    return (dispatch, getState) => {
        return dispatch({
            types: [rc.USER_LOAD, rc.USER_LOAD_SUCCESS, rc.USER_LOAD_FAIL],
            promise: () => {
                return Services.UserService.loadUser();
            }
        })
    }
}
