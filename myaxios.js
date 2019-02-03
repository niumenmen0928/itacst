import axios from 'axios'

var Myaxios = {}

Myaxios.install = function(Vue) {
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
        // axios.defaults.headers.common['Authorization'] = window.sessionStorage.getItem('token')
    axios.interceptors.request.use(function(config) {
        if (config.url !== '/login') {
            config.headers['Authorization'] = window.sessionStorage.getItem('token')
        }
        return config
    })
    Vue.prototype.$http = axios
}

export default Myaxios