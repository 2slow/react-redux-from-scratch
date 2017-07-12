export default class UserService{
    static loadUser () {
        return new Promise((resolve) => {
            //Replace it with some API call
            setTimeout(() => {
                resolve({
                    name: 'Jean Valjean'
                });
            }, 2000)
        });
    }
}