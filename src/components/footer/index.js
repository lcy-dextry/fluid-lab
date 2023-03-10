import React, { memo } from 'react'
// 组件
import { FooterWrapper } from './style'
// 数据
import { certification, footerItems } from '@/common/local'

const Footer = memo(() => {
    return (
        <FooterWrapper>
            <div className='wrap-v1'>
                <ul className='footer-list'>
                    {
                        footerItems.map(item => {
                            return (
                                <li className='footer-item'
                                    key={item.title}
                                >
                                    {item.text}
                                </li>
                            )
                        })
                    }
                </ul>
                <a className='certification' href='https://beian.miit.gov.cn/'>{certification}</a>
            </div>
        </FooterWrapper>
    )
})
export default Footer