import {combineReducers} from 'redux';
import application from './applicationReducer'
import user from './userReducer'

export default combineReducers({
    application,
    user
});
