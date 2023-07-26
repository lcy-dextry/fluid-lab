export function yearList(min, max) {
    max = typeof max == 'number' ? max : +max
    min = typeof min == 'number' ? min : +min
    let res = []
    while (max >= min) {
        res.push(max)
        max--;
    }
    res.push(`Before Dec.${min - 1}`)
    return res;
}
// Activity页面当前位置
export function findGalleryName(gallery, galleryList) {
    let galleryName = ''
    galleryList.map(item => {
        if (item.location === gallery + '') {
            galleryName = item.name
        }
        return item
    })
    return galleryName
}
// Activity页面当前位置
export function findResearchName(research, researchList) {
    let researchName = ''
    researchList.map(item => {
        if (item.location === research + '') {
            researchName = item.type
        }
        return item
    })
    return researchName
}
// Tutor页面guideList
export function makeList(text) {
    let res = []
    text.map(item => {
        let obj = {}
        obj.type = item.type
        obj.location = item.location
        res.push(obj)
        return item
    })
    return res
}
// News 按发布时间排序
export function orderNews(data) {
    data.sort((a, b) => {
        return b.date - a.date
    })
    return data
}