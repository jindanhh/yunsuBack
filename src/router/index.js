import Vue from 'vue'
import VueRouter from 'vue-router'
import Daipay from '../order/DaiPay'

Vue.use(VueRouter)

const routes = [{
    path: '/daipay',
    name: 'daipay',
    component: Daipay
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router