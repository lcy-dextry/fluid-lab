import React, { memo, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// 组件
import { NewsWrapper } from './style'
import Banner from 'c/banner'
import Content from 'c/content'
import { HomeFilled } from '@ant-design/icons';
// 数据
import { db } from '@/utils/cloudBase';
import { getNews } from '@/redux/actions';

const News = memo(({
    news,
    getNews
}) => {
    // 获取
    const [text, setText] = useState([]);
    const getNewTexts = () => {
        db.collection('news')
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
            <div className='left-part'>课题组新闻</div>
            <div className='right-part'>
                <div className='location-box'>
                    <HomeFilled />
                    <div className='text'>
                        {`您现在的位置： → 课题组新闻`}
                    </div>
                </div>
                <div className='news-list'>
                    {
                        text.map(item => {
                            return (
                                <NavLink
                                    className='news-item'
                                    key={item._id}
                                    to={`/news/${item._id}`}
                                >
                                    {item.title}
                                </NavLink>
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
            <NewsWrapper>
                <Content Component={component} />
            </NewsWrapper>
        </>
    )
})
export default connect(
    state => ({
        news: state.news
    }),
    { getNews }
)(News);