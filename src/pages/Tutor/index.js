import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { marked } from 'marked';
// 组件
import Banner from 'c/banner'
// 数据
import { db } from '@/utils/cloudBase';
import { getTutorText } from '@/redux/actions';
import { makeList } from '@/utils/functions';
// 样式
import './style.less'

const Tutor = memo(({
    texts,
    getTutorText
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
    const { type } = useParams()
    // 当前内容
    const [nowText, setNowText] = useState('')
    const getNewTexts = () => {
        db.collection('tutor')
            .get()
            .then(res => {
                console.log('执行了！')
                getTutorText(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewTexts();
    }, [texts]);
    useDeepCompareEffect(() => {
        const id = type;
        const theText = texts.filter(item => item.location === id)[0];
        if (theText) {
            const { text } = theText;
            setNowText(text);
        }
    }, [texts, type]);

    return (
        <>
            <Banner />
            <div className='tutor-wrapper'>
                <ul className='guide-list'>
                    {
                        makeList(texts).map(item => {
                            return (
                                <NavLink
                                    to={`/tutor/${item.location}`}
                                    className='guide-item'
                                    key={item.type}
                                >
                                    {item.type}
                                </NavLink>
                            )
                        })
                    }
                </ul>
                <div className='wrap-v1 markdown-part'>
                    <div
                        className=" markdownStyle"
                        dangerouslySetInnerHTML={{
                            __html: marked(nowText).replace(/<pre>/g, "<pre>"),
                        }}
                    />
                </div>
            </div>
        </>
    )
})
export default connect(
    state => ({
        texts: state.tutorText
    }),
    { getTutorText }
)(Tutor);

