import http from '@/api/http.js'

// 登录功能
export const login = data => {
    let param = new URLSearchParams()
    param.append('mobile', data.name)
    param.append('sysPwd', data.pwd)
    return http({
        method: 'post',
        url: '/sysuser/login',
        data: param
    })
}


// 退出
export const quit = data => {

    return http({
        method: 'post',
        url: '/User/quit',
    })
}
