import React, { memo } from 'react'
// 组件
import Banner from 'c/banner'
import { ResearchWrapper } from './style'

const Research = memo(() => {
    return (
        <>
            <Banner />
            <ResearchWrapper>
                Research
            </ResearchWrapper>
        </>

    )
})
export default Research