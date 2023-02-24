import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com',
    withCredentials: true
})

export const userApi = {
    getUsers() {
        return instance.get(`/user/${username}`);
    },
    getRepositories(){
        return instance.get(`/user/${username}/repos`)
    }
}
