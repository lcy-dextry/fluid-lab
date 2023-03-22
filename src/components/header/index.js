import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
// 数据
import { headerLinks } from '@/common/local'
import { adminURL } from '@/common/local';
// 样式
import './style.less'

const Header = memo(() => {
    return (
        <div className='header-wrapper'>
            <div className='wrap-v1'>
                <a href={adminURL} target='_blank' rel="noreferrer"><div className='lab-name' /></a>
                <ul className='guide-list'>
                    {
                        headerLinks.map((item, index) => {
                            return (
                                <NavLink
                                    className='guide-item'
                                    key={item.title}
                                    to={item.link}>
                                    {item.title}
                                </NavLink>
                            )
                            // }
                        })
                    }
                </ul>
            </div>
        </div>
    )
})

export default Header