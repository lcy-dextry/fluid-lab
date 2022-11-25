import React, { memo } from 'react';
// 组件
import { ContentWrapper } from './style'

const Content = memo((props) => {
    const { Component = '' } = props;

    return (
        <ContentWrapper className='wrap-v1'>
            {Component}
        </ContentWrapper>
    )
})
export default Content