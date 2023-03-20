import React, { memo, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import moment from 'moment';
// 组件
import Carousel from './components/carousel'
import Content from 'c/content'
import NewsCard from './components/news-card'
// 数据
import { db } from '@/utils/cloudBase';
import { getNews } from '@/redux/actions';
// 样式
import './style.less'

const Home = memo(({
    news,
    getNews
}) => {
    const [text, setText] = useState([]);
    // 获取
    const getNewTexts = () => {
        db.collection('news')
            .limit(4)
            .get()
            .then(res => {
                getNews(res.data);
            });
    };
    useEffect(() => {
        getNewTexts();
        setText(news);
    }, [news]);
    const component = (
        <>
            <div className='news-part'>
                <div className='title-part'>
                    <NavLink className='title-chinese' to='/news'>课题组新闻</NavLink>
                    <NavLink className='title-english' to='/news'>GROUP NEWS</NavLink>
                </div>
                <div className='news-list'>
                    {
                        text.map(item => {
                            return (
                                <NewsCard key={item._id}
                                    img={item.img}
                                    title={item.title}
                                    date={moment(item.date).format('YYYY-MM-DD')}
                                    location={item._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
    return (
        <>
            <Carousel />
            <div className='home-wrapper'>
                <Content Component={component} />
            </div>
        </>
    )
})
export default connect(
    state => ({
        news: state.news
    }),
    { getNews }
)(Home);