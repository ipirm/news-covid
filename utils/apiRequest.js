import axios from 'axios'
import {API_URI} from '../config'


const request = (callback) => {
    return new Promise((resolve, reject) => {
        callback
            .then(data => resolve(data))
            .catch(e => reject((e)));
    })
}


export default class apiRequest {
    static get(path) {
        return request(axios.get(`${API_URI}/${path}`));
    }

    static getPublic(path) {
        return request(axios.get(`${API_URI}/${path}`));
    }

    static post(path, data) {
        return request(axios.post(`${API_URI}/${path}`, data));
    }

    static patch(path, data) {
        return request(axios.patch(`${API_URI}/${path}`, data));
    }

    static delete(path) {
        return request(axios.delete(`${API_URI}/${path}`));
    }
}
