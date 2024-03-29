import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
import { marked } from 'marked';
import qs from 'qs';
import moment from 'moment';
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
// 数据
import { db } from '@/utils/cloudBase';
import { getActivity } from '@/redux/actions';
// 样式
import './style.less'

const Gallery = memo(({
    activity,
    getActivity
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
    // 当前内容
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    // 获取
    const getNewTexts = () => {
        db.collection('activity')
            .get()
            .then(res => {
                getActivity(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewTexts();
    }, [activity]);
    useDeepCompareEffect(() => {
        const params = qs.parse(document.location.search.slice(1));
        const { id } = params;
        const detailText = activity.filter(item => item._id === id)[0]
        if (detailText) {
            const { date, title, text } = detailText;
            setDate(moment(date).format('YYYY-MM-DD HH:mm:ss').replace(/ /g, ' '))
            setTitle(title)
            setText(text);
        }
    }, [activity, document.location.search])
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
        <div className='gallery-wrapper'>
            <Banner />
            <Content Component={component} />
        </div>
    )
})
export default connect(
    state => ({
        activity: state.activity
    }),
    { getActivity }
)(Gallery);
