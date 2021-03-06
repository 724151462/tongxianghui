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


console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  console.log(123)
  axios.defaults.baseURL = 'http://255920k78z.qicp.vip/api/'
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  // if (process.env.VUE_APP_FLAG === 'prod') {
  //   //production 生产环境
  //   axios.defaults.baseURL = 'https://api.tskedu.com';
  //   window.sockterUrl = 'wss://api.tskedu.com/websocket'
  // } else {
  //   //dev 测试环境
  //   axios.defaults.baseURL = 'http://apidev.tskedu.cn:9008';
  //   window.sockterUrl = 'ws://apidev.tskedu.cn:9008/websocket'
  // }
} else {
  //本地 开发环境
  axios.defaults.baseURL = '/api';
}
axios.defaults.timeout = 10000
axios.defaults.responseType = 'json'
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
      Globe_VM.$toast('您还未注册,为您跳转注册页面...')
      setTimeout(() => {
        Globe_VM.$router.push({
          path: '/center/zhuce'
        })
      }, 1000);
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
    console.log(date)
    axios(date).then(res => {
      reject(res.data)
    }).catch(error => {
      resolve(error)
    })
  })
}