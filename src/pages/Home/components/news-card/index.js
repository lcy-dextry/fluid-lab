import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
// 组件
import { CalendarOutlined } from '@ant-design/icons';
// 样式
import './style.less'

const NewsCard = memo((props) => {
    const { img, title, date, location } = props
    return (
        <div className='news-item'>
            <img className='img-part' alt='' src={img} />
            <div className='news-msg'>
                <NavLink className='news-title nowrap-one-line'
                    to={`/news/${location}`}>
                    {title}
                </NavLink>
                <div className='news-date'>
                    <CalendarOutlined />
                    {date}
                </div>
            </div>
        </div>
    )
})
export default NewsCard