import rc from 'constants/redux-constants';

export function addCounter () {
    return {
        type: rc.APPLICATION_COUNTER_ADD
    }
}