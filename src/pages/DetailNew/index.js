import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
import { marked } from 'marked';
import { useParams } from 'react-router-dom'
import moment from 'moment';
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
// 数据
import { db } from '@/utils/cloudBase';
import { getNews } from '@/redux/actions';
// 样式
import './style.less'

const DetailNew = memo(({
    news,
    getNews
}) => {
    // 配置marked
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: false
    })
    // 当前类型
    const { id: currentID } = useParams()
    // 当前内容
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    // 获取
    const getNewTexts = () => {
        db.collection('news')
            .get()
            .then(res => {
                getNews(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewTexts();
    }, [news]);
    useDeepCompareEffect(() => {
        const id = currentID;
        const theText = news.filter(item => item._id === id)[0];
        if (theText) {
            const { title, date, text } = theText;
            setDate(moment(date).format('YYYY-MM-DD HH:mm:ss').replace(/ /g, ' '))
            setTitle(title)
            setText(text);
        }
    }, [news, currentID]);
    const component = (
        <>
            <div className='brief-msg'>
                <div className='title-part'>{title}</div>
                <div className='pub-time'>{`发布时间：${date}`}</div>
            </div>
            <div className='markdown-part '>
                <div
                    className="markdownStyle"
                    dangerouslySetInnerHTML={{
                        __html: marked(text).replace(/<pre>/g, "<pre>"),
                    }}
                />
            </div>
        </>
    )

    return (
        <>
            <Banner />
            <div className='detail-new-wrapper'>
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
)(DetailNew);
