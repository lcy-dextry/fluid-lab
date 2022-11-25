import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { marked } from 'marked';
// 组件
import Banner from 'c/banner'
import Content from 'c/content'
import { TutorWrapper } from './style'
// 数据
import { tutorList, briefMarkdown, projectMarkdown, honorMarkdown } from '@/common/local'

const Tutor = memo(() => {
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
    let component
    const { type } = useParams()
    const brief_component = (
        <>
            <div className='tutor-photo' />
            <div className='linear' />
            <div
                className='brief'
                dangerouslySetInnerHTML={{ __html: marked(briefMarkdown).replace(/<pre>/g, "<pre id='hlsj'>") }}
            />
        </>
    )
    const project_component = (
        <>
            <div
                className='project'
                dangerouslySetInnerHTML={{ __html: marked(projectMarkdown).replace(/<pre>/g, "<pre id='hlsj'>") }}
            />
        </>
    )
    const honor_component = (
        <>
            <div
                className='honor'
                dangerouslySetInnerHTML={{ __html: marked(honorMarkdown).replace(/<pre>/g, "<pre id='hlsj'>") }}
            />
        </>
    )
    switch (type) {
        case 'brief':
            component = brief_component
            break;
        case 'project':
            component = project_component
            break;
        case 'honor':
            component = honor_component
            break;
        default:
            component = ''
    }
    return (
        <>
            <Banner />
            <TutorWrapper>
                <ul className='guide-list'>
                    {
                        tutorList.map(item => {
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
                <Content Component={component} />
            </TutorWrapper>
        </>
    )
})
export default Tutor