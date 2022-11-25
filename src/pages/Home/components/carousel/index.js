import React, { memo } from 'react'
// 组件
import { CarouselWrapper } from './style'
import { Carousel } from 'antd';

const CarouselBox = memo(() => {
    return (
        <CarouselWrapper>
            <Carousel autoplay>
            </Carousel>
        </CarouselWrapper>
    )
})
export default CarouselBox