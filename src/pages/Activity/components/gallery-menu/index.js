import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
// 组件
import { GalleyMenuWrapper } from './style'
// 数据
import { galleryList } from '@/common/local'

const GalleyMenu = memo(() => {
    const [galley, setGalley] = useState('成员合影')

    return (
        <GalleyMenuWrapper>
            <div className='choosen-one'>{galley}</div>
            <ul className='show-galley-list'>
                {
                    galleryList.map(item => {
                        return (
                            <NavLink
                                key={item.name}
                                className='show-galley-item'
                                to={`/activity/${item.location}`}
                                onClick={e => { setGalley(e.target.innerHTML) }}
                            >
                                {item.name}
                            </NavLink>
                        )
                    })
                }
            </ul>
        </GalleyMenuWrapper>
    )
})
export default GalleyMenu