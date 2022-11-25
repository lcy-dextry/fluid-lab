import React, { memo } from 'react'
// 组件
import { ArticleBoxWrapper } from './style'

const ArticleBox = memo((props) => {
    const { text } = props
    return (
        <ArticleBoxWrapper>
            <div className='article-msg'>
                {text}
            </div>
        </ArticleBoxWrapper>
    )
})

export default ArticleBox