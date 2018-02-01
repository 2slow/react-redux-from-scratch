export default class UserService {
    static loadUser () {
        return new Promise((resolve) => {
            // Replace it with some API call
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: 'Jean Valjean',
                    email: 'jean.valjean@gmail.com'
                });
            }, 2000)
        });
    }
}