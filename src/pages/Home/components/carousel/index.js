import React, { memo } from 'react'
// 组件
import { Carousel } from 'antd';
// 样式
import './style.less'

const CarouselBox = memo(() => {
    return (
        <div className='carousel-wrapper'>
            <Carousel autoplay>
            </Carousel>
        </div>
    )
})
export default CarouselBox