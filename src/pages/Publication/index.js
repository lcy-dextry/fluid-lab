import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
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
    // 当前内容
    const [nowPapers, setNowPapers] = useState([])
    // 获取
    const getNewTexts = () => {
        db.collection('publication')
            .get()
            .then(res => {
                getPublication(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewTexts();
    }, [papers]);
    useDeepCompareEffect(() => {
        const id = currentYear;
        const thePapers = papers.filter(item => { return item.year === id });
        if (thePapers) {
            setNowPapers(thePapers);
        }
    }, [papers, currentYear])

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
        <div className='publication-wrapper'>
            <Banner />
            <Content Component={component} />
        </div>
    )
})
export default connect(
    state => ({
        papers: state.publication
    }),
    { getPublication }
)(Publication);