import React, { memo } from 'react'
// 组件
import { TitleWrapper } from './style'

const Title = memo((props) => {
    const { title = '' } = props
    return (
        <TitleWrapper>
            <div className='title'>
                {title}
            </div>
        </TitleWrapper>
    )
})

export default Title
