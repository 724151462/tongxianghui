import {
  commonsAjax
} from './request'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://255920k78z.qicp.vip'
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


export function getActList() {
  return commonsAjax(`interaction/v1/page`, 'get')
}

export function getWinRecord() {
  return commonsAjax('interaction/v1/user/winningrecord/list', 'get')
}

export function getSubject(data) {
  return commonsAjax(`/v1/interaction/${data}/subjects`, 'get')
}

export function postAnsform(data) {
  return commonsAjax(`/`)
}

export function login(data) {
  return commonsAjax(`wxx/v1/login`, data, 'post')
}

export function getYzm(data) {
  return commonsAjax(`captcha/v1/mobile/${data}`, '', 'post')
}

export function register(data) {
  return commonsAjax(`mp/v1/user/register`, data, 'put')
}