import http from '@/api/http.js'

//查询所有新闻
export const NewsSelect = data => {
    let param = new URLSearchParams()
    param.append('homepage', data)
    return http({
        method: 'post',
        url: '/News/select',
        data: param
    })
}

//根据新闻名称查询
export const NewsTitleSelect = data => {
    return http({
        method: 'post',
        url: '/News/select',
        pamas: {
            title: data
        }
    })
}

//修改新闻
export const NewsUpdate = data => {
    let param = new URLSearchParams()
    param.append('title', data.title)
    param.append('summary', data.summary)
    param.append('img', data.img)
    param.append('source', data.source)
    param.append('num', data.num)
    param.append('content', data.content)
    param.append('addtime', data.addtime)
    return http({
        method: 'post',
        url: '/News/Update',
        data: param
    })
}

//删除新闻
export const NewsDelect = data => {
    return http({
        method: 'post',
        url: '/News/Update',
        pamas: {
            id: data
        }
    })
}

//添加新闻内容
export const NewsInsert = data => {
    return http({
        method: 'post',
        url: '/News/Insert',
        news: data

    })
}

//查询所有分类
export const NewsCatSelect = () => {
    return http({
        method: 'get',
        url: '/News/CatList',

    })
}

//删除新闻分类
export const NewsCatDelect = data => {
    return http({
        method: 'post',
        url: '/News/CatTwoAndOneDel',
        pamas: {
            Cat: data.Cat,
            id: data.id
        }
    })
}

//添加新闻一级分类
export const NewsCatOne = data => {
    return http({
        method: 'post',
        url: '/News/CatTwoInsert',
        pamas: {
            Cat: data.Cat,
            newsCatOne: data.news
        }

    })
}

//添加新闻二级分类
export const NewsCatTwo = data => {
    return http({
        method: 'post',
        url: '/News/CatTwoInsert',
        pamas: {
            Cat: data.Cat,
            newsCatTwo: data.news
        }

    })
}