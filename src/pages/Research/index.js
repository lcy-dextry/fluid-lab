import React, { memo } from 'react'
// 组件
import Banner from 'c/banner'
// 样式
import './style.less'

const Research = memo(() => {
    return (
        <>
            <Banner />
            <div className='research-wrapper'>
                Research
            </div>
        </>

    )
})
export default Research