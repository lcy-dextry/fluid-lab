import React, { memo } from 'react'
// 样式
import './style.less'

const ArticleBox = memo((props) => {
    const { text } = props
    return (
        <div className='articleBox-wrapper'>
            <div className='article-msg'>
                {text}
            </div>
        </div>
    )
})

export default ArticleBox