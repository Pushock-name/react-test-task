import axios from "axios";

const instanse = axios.create({
    baseURL: 'http://localhost:3000/'
})


export const API = {
    getCities() {
        return instanse.get('/cities')
        .then(response => {
            return response.data
        })
    }
}
