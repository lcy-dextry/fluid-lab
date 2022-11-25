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