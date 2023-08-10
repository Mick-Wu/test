import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/el-button.css'
import { registerElement } from './global'
import msRequest from './service'
// import './service/test'

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
console.log(msRequest)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
msRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // Authorization: 'Bearer your_token_here'
    },
    interceptors: {
      requestInterceptor(config) {
        console.log('单个拦截')
        config.headers = {
          'Content-Type': 'application/json'
        }
        return config
      },
      responseInterceptor(resp) {
        console.log('单个响应')
        return resp
      }
    },
    showLoading: true
  })
  .then((resp) => {
    console.log(resp)
    console.log(resp.data)
    console.log(resp.returnCode)
    console.log(resp.success)
  })

const app = createApp(App)
app.use(router).use(store).use(registerElement).mount('#app')
