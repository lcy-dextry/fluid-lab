import React, { memo } from 'react'
import { HomeFilled } from '@ant-design/icons';
// 组件
import { LocationBoxWrapper } from './style'

const LocationBox = memo((props) => {
    const { year } = props
    return (
        <LocationBoxWrapper>
            <HomeFilled />
            <div className='text'>
                {`您现在的位置： → 论文发表 → ${year}`}
            </div>
        </LocationBoxWrapper>
    )
})

export default LocationBox