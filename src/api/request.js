import axios from 'axios'
import qs from 'qs'
import Globe_VM from '../main'
import {
  getToken,
  removeToken,
  getReToken,
  checkToken,
  twoWeeksExchange
} from '@/utils/auth'
import Cookie from "js-cookie";

axios.defaults.timeout = 10000
axios.defaults.responseType = 'json'
axios.defaults.baseURL = '/api';
let token = localStorage.getItem('token')
console.log(token)
if(token) axios.defaults.headers = {token}

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  res => {
    if (res.data && Number(res.data.code) === 401) {
      removeToken()
      Globe_VM.$router.push({
        path: '/center/zhuce'
      })
    }
    if (res.data) {
      return Promise.reject(res.data)
    }
    return res
  },
  error => {
    return error
  }
)

export function commonsAjax(url, data, method, headers) {
  console.log(url)
  return new Promise((resolve, reject) => {
    let date = {
      url: url,
      method: method
    }
    if (getToken()) {
      date.headers = {
        token: getToken()
      }
    }
    if (data !== '' && method === 'get') {
      date.url += '?' + qs.stringify(data)
    }
    if (data !== '' && method === 'post') {
      date.data = data
    }
    if (data !== '' && method === 'delete') {
      date.data = data
    }
    if (data !== '' && method === 'put') {
      date.data = data
    }
    if (data !== '' && method === 'patch') {
      date.data = data
    }
    axios(date).then(res => {
      reject(res.data)
    }).catch(error => {
      resolve(error)
    })
  })
}