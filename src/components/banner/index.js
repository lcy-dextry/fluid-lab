import React, { memo } from 'react'
// 样式
import './style.less'

const Banner = memo(() => {
    return (
        <div className='banner-wrapper'>
            <div className='banner-img' />
        </div>
    )
})

export default Banner