import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { marked } from 'marked';
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
import ResearchMenu from './components/research-menu'
import LocationBox from './components/location-box'
// 数据
import { db } from '@/utils/cloudBase';
import { findResearchName } from '@/utils/functions';
import { getResearchText } from '@/redux/actions';
import { makeList } from '@/utils/functions';
// 样式
import './style.less'

const Research = memo(({
    texts,
    getResearchText
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
        db.collection('research')
            .get()
            .then(res => {
                getResearchText(res.data);
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

    const component = (
        <>
            <ResearchMenu researchList={makeList(texts)} />
            <div className='right-part'>
                <LocationBox research={findResearchName(type, makeList(texts))} />
                <div className='markdown-part'>
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

    return (
        <div className='research-wrapper'>
            <Banner />
            <Content Component={component} />
        </div>
    )
})
export default connect(
    state => ({
        texts: state.researchText
    }),
    { getResearchText }
)(Research);

