import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MSRequestInterceptors, MSRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true
export default class MSRequest {
  instance: AxiosInstance
  interceptors?: MSRequestInterceptors
  showLoading?: boolean
  loading?: LoadingInstance

  constructor(config: MSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    console.log(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('global request')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loading...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (resp) => {
        console.log('全局响应拦截')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        const data = resp.data
        if (data.returnCode === '-10010') {
          console.log('错误')
        } else {
          return data
        }
      },
      (err) => {
        switch (err.response.status) {
          case '404':
            console.log('404')
            break
          default:
            break
        }
        return err
      }
    )
  }

  request<T>(config: MSRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      console.log('request ==>', config)
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((resp) => {
          if (config.interceptors?.responseInterceptor) {
            resp = config.interceptors.responseInterceptor(resp)
          }
          resolve(resp)
          this.showLoading = DEFAULT_LOADING
          console.log(resp)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: MSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: MSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: MSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
