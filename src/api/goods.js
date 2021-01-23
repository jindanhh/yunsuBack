import http from '@/api/http.js'

//查询商品所有
export const GoodsSelect = () => {
    return http({
        method: 'get',
        url: '/goods/select',
    })
}
//根据商品名称查询
export const GoodsSelect = data => {
    return http({
        method: 'post',
        url: '/goods/select',
        params:{
            title:data
        }
    })
}

//修改商品
export const GoodsUpdate = data => {
    return http({
        method: 'post',
        url: '/goods/update',
        params:{
            goods: data
        }
    })
}

//删除商品
export const GoodsDetect = data => {
    return http({
        method: 'post',
        url: '/goods/detect',
        params:{
            id:data
        }
    })
}

//添加商品
export const GoodsInsert = data => {
    return http({
        method: 'post',
        url: '/goods/insert',
        params:{
            goods:data
        }
    })
}

//查询所有商品分类
export const CatSelectAll = () => {
    return http({
        method: 'get',
        url: '/Cat/selectAll',
    })
}

//添加商品一级分类
export const GoodsCatOne= data => {
    return http({
        method: 'post',
        url: '/Cat/CatInsert',
        params:{
            Cat: data.Cat,
            goodsCatOne: data.goodsCatOne
        }
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
    return http({
        method: 'post',
        url: '/Cat/CatDelect',
        params:{
            Cat: data.Cat,
            id : data.id
        }
    })
}







