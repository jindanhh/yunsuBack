import http from '@/api/http.js'


// 根据状态查询所有订单（1待付款  2待发货  3已发货  4用户已取消 5商家取消 6退款  0已完成）
export const OrderTypeSelect = data => {
    let param = new URLSearchParams()
    param.append('ordertype', data)
    return http({
        method: 'post',
        url: '/Orders/UidSelect',
        data: param
    })
}

//查找所有订单
export const OrderSelect = data => {
    return http({
        method: 'post',
        url: '/Orders/UidSelect',
    })
}

// 根据订单号查询订单
export const OrderIdSelect = data => {
    let param = new URLSearchParams()
    param.append('orderid', data)
    return http({
        method: 'post',
        url: '/Orders/UidSelect',
        data: param
    })
}


//修改订单状态
export const UpDateOrder = data => {
    let param = new URLSearchParams()
    param.append('ordertype', data.ordertype)
    param.append('id', data.id)
    return http({
        method: 'post',
        url: '/Orders/update',
        data: param
    })
}

//删除订单
// export const DelOrder = data => {
//     let param = new URLSearchParams()
//     param.append('id', data.id)
//     return http({
//         method: 'post',
//         url: '/Orders/update',
//         data: param
//     })
// }