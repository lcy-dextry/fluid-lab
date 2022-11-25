import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
// 组件
import { GalleryWrapper } from './style'
import Banner from 'c/banner'
import Content from 'c/content'
// 数据
import { picsList } from '@/common/local'

const Gallery = memo(() => {
    const { name } = useParams()
    const showPic = picsList.filter(item => {
        return item.location === name + ''
    })[0].imgs

    const component = (
        <>
            <ul className='pic-list'>
                {
                    showPic.map(item => {
                        return (
                            <img
                                className='pic-item'
                                alt=''
                                key={item}
                                src={item}
                            />
                        )
                    })
                }
            </ul>
        </>
    )

    return (
        <>
            <Banner />
            <GalleryWrapper>
                <Content Component={component} />
            </GalleryWrapper>
        </>

    )
})
export default Gallery