import React, { memo } from 'react'
// 组件
import { NewsWrapper } from './style'
import Banner from 'c/banner'
import Content from 'c/content'
import { HomeFilled } from '@ant-design/icons';

const News = memo(() => {
    const component = (
        <>
            <div className='left-part'>课题组新闻</div>
            <div className='right-part'>
                <div className='location-box'>
                    <HomeFilled />
                    <div className='text'>
                        {`您现在的位置： → 课题组新闻`}
                    </div>
                </div>
                <ul className='news-list'>
                    {

                    }
                </ul>
            </div>
        </>
    )
    return (
        <>
            <Banner />
            <NewsWrapper>
                <Content Component={component} />
            </NewsWrapper>
        </>
    )
})
export default News