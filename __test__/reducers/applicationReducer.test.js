import reducer from 'reducers/applicationReducer'
import rc from 'constants/redux-constants';

describe('application reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}).application).toEqual({
                counter: 0
            })
    })

    it('should handle APPLICATION_COUNTER_ADD', () => {
        expect(
            reducer({}, {
                type: rc.APPLICATION_COUNTER_ADD
            }).application
        ).toEqual({
                counter: 1
            })
    })
})