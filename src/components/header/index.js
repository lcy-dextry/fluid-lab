import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
// 数据
import { headerLinks } from '@/common/local'
import { adminURL } from '@/common/local';
// 组件
import { HeaderWrapper } from './style'

const Header = memo(() => {
    return (
        <HeaderWrapper>
            <div className='wrap-v1'>
                <a href={adminURL} target='_blank'><div className='lab-name' /></a>
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
        </HeaderWrapper>
    )
})

export default Header