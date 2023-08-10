import { App } from 'vue'
import { ElButton, ElInput, ElForm, ElFormItem } from 'element-plus'
// import 'element-plus/theme-chalk/base.css'
import 'element-plus/dist/index.css'

const components = [ElButton, ElInput, ElForm, ElFormItem]
export default {
  install(app: App) {
    for (const component of components) {
      app.component(component.name, component)
    }
  }
}
