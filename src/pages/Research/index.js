import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
import { marked } from 'marked';
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
// 数据
import { db } from '@/utils/cloudBase';
import { getResearchText } from '@/redux/actions';
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
    // 当前内容
    const [text, setText] = useState([])
    // 获取
    const getNewTexts = () => {
        db.collection('research')
            .get()
            .then(res => {
                getResearchText(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewTexts();
        setText(texts);
    }, [texts]);

    const component = (
        <>
            <div className='research-menu-wrapper'>
                <div className='choosen-one'>研究方向</div>
            </div>
            <div className='right-part'>
                <div className='markdown-part'>
                    {
                        text.map(item => {
                            return (
                                <div key={item._id}
                                    className=" markdownStyle"
                                    dangerouslySetInnerHTML={{
                                        __html: marked(item.text).replace(/<pre>/g, "<pre>"),
                                    }}
                                />
                            )
                        })
                    }
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

