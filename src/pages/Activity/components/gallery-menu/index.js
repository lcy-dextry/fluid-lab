import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
// 数据
import { galleryList } from '@/common/local'
// 样式
import './style.less'

const GalleyMenu = memo(() => {
    const [galley, setGalley] = useState('成员合影')

    return (
        <div className='galley-menu-wrapper'>
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
        </div>
    )
})
export default GalleyMenu