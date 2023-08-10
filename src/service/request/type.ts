import type {
  AxiosRequestConfig,
  AxiosResponse
  // InternalAxiosRequestConfig
} from 'axios'

export interface MSRequestInterceptors<T = AxiosResponse> {
  // requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface MSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MSRequestInterceptors<T>
  showLoading?: boolean
}
