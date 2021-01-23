import http from '@/api/http.js'

//查询商品所有
export const GoodsSelects = data => {
    let param = new URLSearchParams()
    param.append('goodsName', data.query)
    param.append('current', data.current)
    param.append('size', data.size)
    return http({
        method: 'post',
        url: '/goods/GoodsCat',
        data:param
    })
}

export const goodsupdate= data =>{
    let param = new URLSearchParams()
    param.append('id', data.id)
    param.append('goodsName', data.goodsName)
    param.append('subTitle', data.subTitle)
    param.append('goodsPrice', data.goodsPrice)
    param.append('shopPrice', data.shopPrice)
    param.append('brand', data.brand)
    param.append('goodsNum', data.goodsNum)
    param.append('hit', data.hit)
    param.append('mainParams', data.mainParams)
    param.append('content', data.content)
    return http({
        method : 'post',
        url : '/goods/update',
        data : param

    })
}

//修改商品
export const GoodsUpdate = data => {
    let param = new URLSearchParams()
    param.append('id', data.id)
    param.append('goodsName', data.goodsName)
    param.append('subTitle', data.subTitle)
    param.append('goodsPrice', data.goodsPrice)
    param.append('shopPrice', data.shopPrice)
    param.append('brand', data.brand)
    param.append('goodsNum', data.goodsNum)
    param.append('hit', data.hit)
    param.append('mainParams', data.mainParams)
    param.append('content', data.content)
    return http({
        method: 'post',
        url: '/goods/update',
        data:param
    })
}
// export const GoodsUpdate = data => {
//     return http({
//         method: 'post',
//         url: '/goods/update',
//         params:{
//             goods: data
//         }
//     })
// }

//删除商品
export const GoodsDetect = data => {
    let param = new URLSearchParams()
    param.append('id', data)
    return http({
        method: 'post',
        url: '/goods/delect',
        data:param
    })
}

//添加商品
export const GoodsInsert = data => {
    let param = new URLSearchParams()
    param.append('goodsName', data.goodsName)
    param.append('subTitle', data.subTitle)
    param.append('goodsPrice', data.goodsPrice)
    param.append('shopPrice', data.shopPrice)
    param.append('brand', data.brand)
    param.append('goodsNum', data.goodsNum)
    param.append('hit', data.hit)
    param.append('mainParams', data.mainParams)
    param.append('content', data.content)
    return http({
        method: 'post',
        url: '/goods/insert',
        data:param
    })
}



// export const GoodsInsert = data => {
//     return http({
//         method: 'post',
//         url: '/goods/insert',
//         params:{
//             goods:data
//         }
//     })
// }

//查询所有商品分类
export const CatSelectAll = () => {
    return http({
        method: 'get',
        url: '/Cat/selectAll',
    })
}

//添加商品一级分类
export const GoodsCatOne= data => {
    let param = new URLSearchParams()
    param.append('Cat', data.Cat)
    param.append('goodsCatName', data.goodsCatName)
    return http({
        method: 'post',
        url: '/Cat/CatInsert',
        data:param
    })
}

//添加商品二级分类
export const GoodsCatTwo = data => {
    return http({
        method: 'post',
        url: '/Cat/CatInsert',
        params:{
            Cat: data.Cat,
            two: data.two
        }
    })
}

//添加商品三级分类
export const GoodsCatThree = data => {
    return http({
        method: 'post',
        url: '/Cat/CatInsert',
        params:{
            Cat: data.Cat,
            goodsCatThree: data.goodsCatThree
        }
    })
}

//删除商品分类
export const  GoodsCatDelect= data => {
    let param = new URLSearchParams()
    param.append('Cat', data.Cat)
    param.append('id', data.id)
    return http({
        method: 'post',
        url: '/Cat/CatDelect',
        data:param
    })
}






