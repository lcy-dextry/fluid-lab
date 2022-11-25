import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
// 组件
import { HomeWrapper } from './style'
import Carousel from './components/carousel'
import Content from 'c/content'
import NewsCard from './components/news-card'

const Home = memo(() => {
    const component = (
        <>
            <div className='news-part'>
                <div className='title-part'>
                    <NavLink className='title-chinese' to='/news'>课题组新闻</NavLink>
                    <NavLink className='title-english' to='/news'>GROUP NEWS</NavLink>
                </div>
                <div className='news-list'>
                    <NewsCard
                        img='http://www-x-zhenleisonggroup-x-com.img.abc188.com/uploadfile/2022/1119/20221119120856395.jpg'
                        title='恭喜黄江旭同学发表论文 “小猪口水的多相问题研究” 一篇！'
                        text='恭喜黄江旭同学在《超级小猪》期刊（T1）发表猪猪论文一篇！太厉害了！太厉害了！太厉害了！太厉害了！'
                        date='2022-11-23'
                    />
                </div>
            </div>
        </>
    )
    return (
        <>
            <Carousel />
            <HomeWrapper>
                <Content Component={component} />
            </HomeWrapper>
        </>
    )
})

export default Home