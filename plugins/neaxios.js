import axios from 'axios'

const request = (callback) => {
    return new Promise((resolve, reject) => {
        callback
            .then(data => resolve(data))
            .catch(e => reject(handleError(e)));
    })
}

const handleError = (e) => {
    console.log(e);
}

export default class neaxios {
    static get(path) {
        return request(axios.get(path));
    }

    static getPublic(path) {
        return request(axios.get(path));
    }

    static post(path, data) {
        return request(axios.post(path, data));
    }

    static patch(path, data) {
        return request(axios.patch(path, data));
    }

    static delete(path) {
        return request(axios.delete(path));
    }
}