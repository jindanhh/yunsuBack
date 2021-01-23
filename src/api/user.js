import http from '@/api/http.js'

// 登录功能
export const login = data => {
    let param = new URLSearchParams()
    param.append('mobile', data.name)
    param.append('sysPwd', data.password)
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


//查询所有用户
export const UsersSelectList = () => {
    let param = new URLSearchParams()
    param.append('current', 1)
    param.append('size', 10)
    return http({
        method: 'post',
        url: '/users/selectList',
        data: param
    })
}


//根据手机号查询
export const UserCurrent = data => {
    let param = new URLSearchParams()
    param.append('current', 1)
    param.append('size', 100)
    param.append('mobile', data)
    return http({
        method: 'post',
        url: '/users/selectList',
        data: param
    })
}

//修改用户
export const UsersUpdate = data => {
    return http({
        method: 'post',
        url: '/users/update',
        params: {
            users: data
        }
    })
}


//删除用户
export const UsersDelect = data => {
    // console.log(data);
    let param = new URLSearchParams()
    param.append('id', data)
    return http({
        method: 'post',
        url: '/users/delect',
        // data: param
        params: {
            id: data
        }
    })
}