import React, { memo, useState } from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
// 数据
import { date } from '@/common/local'
import { yearList } from '@/utils/functions'
// 样式
import './style.less'

const YearMenu = memo(() => {
    const max_year = moment().year()
    const min_year = moment(date).year()
    const showList = yearList(min_year, max_year)
    const [year, setYear] = useState(max_year)

    return (
        <div className='year-menu-wrapper'>
            <div className='choosen-one'>{year}</div>
            <ul className='show-year-list'>
                {
                    showList.map((item, index) => {
                        return (
                            <NavLink
                                key={item}
                                className='show-year-item'
                                to={`/publication/${(item + '').split(' ').join('')}`}
                                onClick={e => { setYear(e.target.innerHTML) }}
                            >
                                {item}
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
})
export default YearMenu