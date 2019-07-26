import {
  commonsAjax
} from './request'
import { cpus } from 'os';

export function getActList() {
  return commonsAjax(`interaction/v1/page`, 'get')
}

export function getWinRecord() {
  return commonsAjax('interaction/v1/user/winningrecord/list', 'get')
}

export function getSubject(data) {
  return commonsAjax(`/v1/interaction/${data}/subjects`, 'get')
}

export function login(data) {
  return commonsAjax(`/wxx/v1/login`, data, 'post')
}

export function getYzm(data) {
  return commonsAjax(`captcha/v1/mobile/${data}`, '', 'post')
}

export function register(data) {
  return commonsAjax(`mp/v1/user/register`, data, 'put')
}

export function wxSign(data) {
  return commonsAjax(`/jsapi/v1/signature`, data, 'post')
}

export function signNum(data) {
  return commonsAjax(`/interaction/v1/qrcode/${data}`)
}

export function postAns(data) {
  return commonsAjax(`/v1/interaction/${data.interactionId}/subjects/answerform`, data.ans, 'post')
}

export function getDrlist(data) {
  return commonsAjax(`/people/v1/people/list/auditstatus.pass`)
}

export function saveDr(data) {
  return commonsAjax(`/people/v1/people/info`, data, 'post')
}

export function peopleDetail(data) {
  return commonsAjax(`/people/v1/people/${data}/info`, data, 'get')
}

export function selfInfo(data) {
  return commonsAjax(`/wxx/v1/user/info`)
}

export function saveInfo(data) {
  return commonsAjax(`/wxx/v1/user/info`, data, 'post')
}

export function topicList() {
  return commonsAjax('/wxx/v1/user/topic')
}