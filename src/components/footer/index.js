import React, { memo } from 'react'
// 数据
import { certification, footerItems } from '@/common/local'
// 样式
import './style.less'

const Footer = memo(() => {
    return (
        <div className='footer-wrapper'>
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
        </div>
    )
})
export default Footer