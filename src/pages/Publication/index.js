import React, { memo, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
import YearMenu from './components/year-menu'
import LocationBox from './components/location-box'
import ArticleBox from './components/article-box'
// 数据
import { db } from '@/utils/cloudBase';
import { getPublication } from '@/redux/actions'
// 样式
import './style.less'

const Publication = memo(({
    papers,
    getPublication
}) => {
    // 当前年份
    const { year: currentYear } = useParams()
    // 获取
    const getNewTexts = () => {
        db.collection('publication')
            .get()
            .then(res => {
                getPublication(res.data);
            });
    };
    useEffect(() => {
        getNewTexts();
    }, [papers]);
    // 当前内容
    const [nowPapers, setNowPapers] = useState([])
    useEffect(() => {
        const id = currentYear;
        const thePapers = papers.filter(item => { return item.year === id });
        if (thePapers) {
            setNowPapers(thePapers);
        }
    }, [papers, document.location])

    const component = (
        <>
            <YearMenu />
            <div className='right-part'>
                <LocationBox year={currentYear} />
                <ul className='article-list'>
                    {
                        nowPapers.map(item => {
                            return (
                                <ArticleBox
                                    key={item.paper}
                                    text={item.paper} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
    return (
        <>
            <Banner />
            <div className='publication-wrapper'>
                <Content Component={component} />
            </div>
        </>

    )
})
export default connect(
    state => ({
        papers: state.publication
    }),
    { getPublication }
)(Publication);