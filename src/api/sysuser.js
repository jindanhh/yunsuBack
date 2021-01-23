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

//查询所有管理员
export const SysUserSelect = () => {
    let param = new URLSearchParams()
    param.append('current', 1)
    param.append('size', 10)
    return http({
        method: 'post',
        url: '/sysuser/select',
        data: param
    })
}

//根据手机号查询管理员信息
export const SysuserCurrent = data => {
    let param = new URLSearchParams()
    param.append('current', 1)
    param.append('size', 100)
    param.append('mobile', data)
    return http({
        method: 'post',
        url: '/sysuser/select',
        data: param
    })
}

//添加管理员
export const SysUserInsert = data => {
    let param = new URLSearchParams()
        // param.append('id', data.id)
    param.append('sysUser', data.sysUser)
    param.append('nickName', data.nickName)
    param.append('mobile', data.mobile)
    param.append('sysPwd', data.sysPwd)
    return http({
        method: 'post',
        url: '/sysuser/insert',
        data: param
    })
}

//删除管理员
export const SysUserDelect = data => {
    let param = new URLSearchParams()
    param.append('id', data)
    return http({
        method: 'post',
        url: '/sysuser/delect',
        data: param
    })
}