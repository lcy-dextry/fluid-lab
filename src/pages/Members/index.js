import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { useParams } from 'react-router-dom'
// 组件
import { MemberWrapper } from './style'
import Content from 'c/content'
import Title from 'c/title'
import Banner from 'c/banner'
import StudentCard from './student-card'
// 数据
import { memberList, members } from '@/common/local'

const Members = memo(() => {
    const { type } = useParams()
    // 在读
    const masters = members.filter(item => {
        return moment(item.year).add(31, 'months').isAfter(moment());
    })
    // 毕业
    const graduates = members.filter(item => {
        return moment(item.year).add(31, 'months').isBefore(moment());
    })
    const component = type === 'master' ? (
        <>
            <Title title='研究生' />
            <div className='masters-list'>
                {
                    masters.map(item => {
                        return (
                            <StudentCard
                                key={item.name}
                                img={item.img}
                                name={item.name}
                                year={item.year}
                                email={item.email}
                            />
                        )
                    })
                }
            </div>
        </>
    ) : (
        <>
            <Title title='毕业生' />
            <div className='graduates-list'>
                {
                    graduates.map(item => {
                        return (
                            <StudentCard
                                key={item.name}
                                img={item.img}
                                name={item.name}
                                year={item.year}
                                email={item.email}
                            />
                        )
                    })
                }
            </div>
        </>
    )
    return (
        <>
            <Banner />
            <MemberWrapper>
                <ul className='guide-list'>
                    {
                        memberList.map(item => {
                            return (
                                <NavLink
                                    to={`/members/${item.location}`}
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
            </MemberWrapper>
        </>
    )
})
export default Members