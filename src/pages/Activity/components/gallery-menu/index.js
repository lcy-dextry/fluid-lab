import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
// 数据
import { galleryList } from '@/common/local'
// 样式
import './style.less'

const GalleyMenu = memo((props) => {
    return (
        <div className='galley-menu-wrapper'>
            <div className='choosen-one'>{props.gallery}</div>
            <ul className='show-galley-list'>
                {
                    galleryList.map(item => {
                        return (
                            <NavLink
                                key={item.name}
                                className='show-galley-item'
                                to={`/activity/${item.location}`}
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