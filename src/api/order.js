import http from '@/api/http.js'


// 根据状态查询所有订单（1待付款  2代发货  3已发货  4已取消   0已完成）
export const OrderTypeSelect = data => {
    let param = new URLSearchParams()
    param.append('ordertype', data)
    return http({
        method: 'post',
        url: '/Orders/UidSelect',
        data: param
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