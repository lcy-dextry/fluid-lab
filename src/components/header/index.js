import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
// 数据
import { headerLinks } from '@/common/local'
// 组件
import { HeaderWrapper } from './style'

const Header = memo(() => {
    return (
        <HeaderWrapper>
            <div className='wrap-v1'>
                <div className='lab-name' />
                <ul className='guide-list'>
                    {
                        headerLinks.map((item, index) => {
                            // if (index === 7) {
                            //     return (
                            //         <NavLink
                            //             className='guide-item search-icon'
                            //             key={item.title}
                            //             to={item.link}>
                            //             {item.component}
                            //         </NavLink>
                            //     )
                            // } else {
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