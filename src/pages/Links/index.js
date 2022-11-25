import React, { memo } from 'react'
// 组件
import { LinksWrapper } from './style'
import Banner from 'c/banner'
import Content from 'c/content'
// 数据
import { contactMsg } from '@/common/local'

const Links = memo(() => {
    const component = (
        <>
            <div className='title'>联系方式：</div>
            <div className='link-box'>
                <div className='link-list'>
                    {
                        contactMsg.map(item => {
                            return (
                                <div key={item.title}
                                    className='link-item'>
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
    return (
        <>
            <Banner />
            <LinksWrapper>
                <Content Component={component} />
            </LinksWrapper>
        </>

    )
})

export default Links