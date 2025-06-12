import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.less';   // style gốc (Less)
import '@/styles/global.less';   
const app = createApp(App)
         // nơi override thêm (nếu cần)

app.use(createPinia())
app.use(router)

app.mount('#app')
