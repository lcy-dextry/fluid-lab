import React, { memo } from 'react'
// 组件
import { DetailNewWrapper } from './style'
import Banner from 'c/banner'

const DetailNew = memo(() => {
    return (
        <>
            <Banner />
            <DetailNewWrapper>
                Detail
            </DetailNewWrapper>
        </>
    )
})
export default DetailNew