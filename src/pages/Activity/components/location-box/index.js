import React, { memo } from 'react'
import { HomeFilled } from '@ant-design/icons';
// 组件
import { LocationBoxWrapper } from './style'

const LocationBox = memo((props) => {
    const { gallery} = props
    return (
        <LocationBoxWrapper>
            <HomeFilled />
            <div className='text'>
                {`您现在的位置： → 组内活动 → ${gallery}`}
            </div>
        </LocationBoxWrapper>
    )
})

export default LocationBox