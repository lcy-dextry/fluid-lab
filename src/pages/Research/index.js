import React, { memo } from 'react'
// 组件
import Banner from 'c/banner'
// 样式
import './style.less'

const Research = memo(() => {
    return (
        <div className='research-wrapper'>
            <Banner />
            Research
        </div>
    )
})
export default Research