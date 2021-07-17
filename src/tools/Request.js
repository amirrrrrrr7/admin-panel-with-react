import axios from 'axios'
import { BASE_URL } from './Constants'
import store from '../redux/store'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-type'] = 'application/json'

const requestInstance = axios.create()

// add a request interceptor
requestInstance.interceptors.request.use(function (config) {
    // console.log(config)
    return config;
}, function (error) {
    return Promise.reject(error);
});

// add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const request = requestInstance
export default request