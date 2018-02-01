import reducer from 'reducers/userReducer'
import rc from 'constants/redux-constants';

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}).user).toEqual({
            current: {
                data: null,
                error: null,
                loading: false,
                lastFetched: null,
                didInvalidate: false
            }
        })
    })

    it('should handle USER_LOAD_SUCCESS', () => {
        var date = new Date().getTime();;
        expect(
            reducer({}, {
                type: rc.USER_LOAD_SUCCESS,
                result: {
                    id: 1,
                    name: "Jean Valjean",
                    email: "jean.valjean@gmail.com"
                }
            }).user

        ).toEqual({
            current: {
                data: {
                    id: 1,
                    name: "Jean Valjean",
                    email: "jean.valjean@gmail.com"
                },
                error: null,
                loading: false,
                lastFetched: date,
                didInvalidate: false
            }
        })
    })
})