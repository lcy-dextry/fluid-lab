import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
// 样式
import './style.less'

const ResearchMenu = memo((props) => {
    const [research, setResearch] = useState('计算流体力学')

    return (
        <div className='research-menu-wrapper'>
            <div className='choosen-one'>{research}</div>
            <ul className='show-research-list'>
                {
                    props.researchList.map(item => {
                        return (
                            <NavLink
                                key={item.type}
                                className='show-research-item'
                                to={`/research/${item.location}`}
                                onClick={e => { setResearch(e.target.innerHTML) }}
                            >
                                {item.type}
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
})
export default ResearchMenu