import React, { memo } from 'react'
// 组件
import { BannerWrapper } from './style'

const Banner = memo(() => {
    return (
        <BannerWrapper>
            <div className='banner-img' />
        </BannerWrapper>
    )
})

export default Banner