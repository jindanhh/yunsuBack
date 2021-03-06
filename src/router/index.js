import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () =>
    import ('@/components/login.vue') }, {
        path: '/home',
        component: home,
        children: [
            { path: '/productlist', 
            component: () =>
            import ('@/components/shop/shoplist.vue') 
            },
            { path: '/addproduct', component: () =>
            import ('@/components/shop/addproduct.vue') },
            { path: '/classification', component: () =>
            import ('@/components/shop/commodity.vue') },
            { path: '/edit', component: () =>
            import ('@/components/shop/edit.vue') },
            {
                path: '/daiPay',
                component: () =>
                    import ('@/views/order/DaiPay.vue')
            }, {
                path: '/deliver',
                component: () =>
                    import ('@/views/order/Deliver.vue')
            }, {
                path: '/cancellation',
                component: () =>
                    import ('@/views/order/Cancellation.vue')
            }, {
                path: '/completed',
                component: () =>
                    import ('@/views/order/Completed.vue')
            }, {
                path: '/allorders',
                component: () =>
                    import ('@/views/order/Allorders.vue')
            }, {
                path: '/users',
                component: () =>
                    import ('@/views/user/Users.vue')
            }, {
                path: '/admin',
                component: () =>
                    import ('@/views/user/Admin.vue')
            }, {
                path: '/newlist',
                name: 'newlist',
                component: () =>
                    import ('@/views/news/NewList.vue')
            }, {
                path: '/addnews',
                name: 'addnews',
                component: () =>
                    import ('@/views/news/Addnews.vue')
            }, {
                path: '/sort',
                name: 'sort',
                component: () =>
                    import ('@/views/news/Sort.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

// 前置守卫判断用户是否登录
router.beforeEach((to, from, next) => {
    let token = window.localStorage.getItem("token")
    if (to.path == '/login') {
        next()
    } else {
        if (token) {
            next()
        } else {
            next('/login')
            next()
        }
    }

});

export default router