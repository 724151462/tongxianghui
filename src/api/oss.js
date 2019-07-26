import { commonsAjax } from './request'

/**
 * 阿里云 oss 获取验签等
 * */
export function ossAli (data) {
  let url = '/v1/policy' + data
  return commonsAjax(url, '', 'get')
}

/**
 * 阿里云 oss 获取验签等
 * */
export function ossAliSts (data) {
  return commonsAjax('/v1/policy', '', 'get')
}

/**
 * 直传方式 获取验签
 * */
export function webUpload (data) {
  return commonsAjax('/oss/v1/policy/web', data, 'get')
}