import {
  commonsAjax
} from './request'

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