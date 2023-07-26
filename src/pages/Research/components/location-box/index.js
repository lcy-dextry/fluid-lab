import React, { memo } from 'react'
import { HomeFilled } from '@ant-design/icons';
// 样式
import './style.less'

const LocationBox = memo((props) => {
    const { research } = props
    return (
        <div className='location-box-wrapper'>
            <HomeFilled />
            <div className='text'>
                {`您现在的位置： → 研究方向 → ${research}`}
            </div>
        </div>
    )
})

export default LocationBox