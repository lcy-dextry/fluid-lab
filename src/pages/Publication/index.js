import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
import { PublicationWrapper } from './style'
import YearMenu from './components/year-menu'
import LocationBox from './components/location-box'
import ArticleBox from './components/article-box'
// 数据
import { articleList } from '@/common/local'

const Publication = memo(() => {
    const { year: currentYear } = useParams()
    const showList = articleList.filter(item => {
        return item.year === currentYear + ''
    })

    const component = (
        <>
            <YearMenu />
            <div className='right-part'>
                <LocationBox year={currentYear} />
                <ul className='article-list'>
                    {
                        showList.map((item, index) => {
                            return (
                                <ArticleBox
                                    key={item.text}
                                    text={`[${index + 1}]. ${item.text}`} />
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
            <PublicationWrapper>
                <Content Component={component} />
            </PublicationWrapper>
        </>

    )
})

export default Publication