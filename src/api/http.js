import http from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// let host = window.location.host 
// console.log(host)
// let baseApiUrl = `http://${host}/api`;
//let baseApiUrl = 'https://xqwechat.hntbtx.com/'
// if (baseApiUrl.indexOf('192.168') !== -1 || baseApiUrl.indexOf('localhost') !== -1) {
//   baseApiUrl = '/api'
// } else {
//   baseApiUrl = 'https://xqwechat.hntbtx.com/'
// } 

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.API_ROOT : '';



//  设置默认请求头
http.defaults.headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
http.defaults.withCredentials = true;
http.defaults.crossDomain = true;



let cancel = {}
let promiseArr = {}
const CancelToken = http.CancelToken
    // http request 请求拦截器
http.interceptors.request.use(
    config => {
        NProgress.start()
            // 发起请求时，取消掉当前正在进行的相同请求
        if (promiseArr[config.url]) {
            // promiseArr[config.url]('请勿频繁操作')
            promiseArr[config.url] = cancel
        } else {
            promiseArr[config.url] = cancel
        }
        const token = window.localStorage.getItem('token')
        if (token) {
            config.headers.Token = token;
        }
        config => config
        return config
    },
    err => {
        return Promise.reject(err)
    }
)


// http response 响应拦截器
http.interceptors.response.use(

    response => {
        const message = Message
        NProgress.done()
            // console.log(response)
            // response = response.data
        if (response.statusCode === 500) {
            return message.error(response.statusMsg)
        }
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)




export default http