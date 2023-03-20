import React, { memo } from 'react';
// 样式
import './style.less'

const Content = memo((props) => {
    const { Component = '' } = props;

    return (
        <div className='wrap-v1'>
            {Component}
        </div>
    )
})
export default Content