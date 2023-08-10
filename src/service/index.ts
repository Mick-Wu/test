import MSRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const msRequest = new MSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // showLoading: true,
  interceptors: {
    requestInterceptor(config) {
      const token = 'tom'
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求拦截成功')
      return config
    },
    requestInterceptorCatch(error) {
      console.log('请求拦截失败')
      return error
    },
    responseInterceptor(config) {
      console.log('响应拦截成功')
      return config
    },
    responseInterceptorCatch(error) {
      console.log('响应拦截失败')
      return error
    }
  }
})

export default msRequest
