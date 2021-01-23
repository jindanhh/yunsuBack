import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element.js'
import 'normalize.css'
import '@/assets/css/global.css'
import viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TreeTable from 'vue-table-with-tree-grid'
import '../src/assets/font/iconfont.css'
import '../src/assets/css/global.css'
axios.defaults.headers = {
    'Content-Type': 'multipart/form-data'
}
import VueDOMPurifyHTML from 'vue-dompurify-html'
Vue.use(VueDOMPurifyHTML)

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return error
    }
)
Vue.prototype.$axios = axios

Vue.use(viewer)
Vue.use(ElementUI);
Vue.component('tree-table', TreeTable)
Vue.config.productionTip = false

Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    return `${y}-${m}-${d}`
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')