import React, { memo } from 'react'
// 样式
import './style.less'

const Title = memo((props) => {
    const { title = '' } = props
    return (
        <div className='title-wrapper'>
            <div className='title'>
                {title}
            </div>
        </div>
    )
})

export default Title
