import React, { memo, useState, useEffect } from 'react'
import { connect } from 'react-redux';
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
import { memberList } from '@/common/local'
import { db } from '@/utils/cloudBase';
import { getMembers } from '@/redux/actions'

const Members = memo(({
    data,
    getMembers
}) => {
    // 获取
    const getNewTexts = () => {
        db.collection('members')
            .get()
            .then(res => {
                getMembers(res.data);
            });
    };
    useEffect(() => {
        getNewTexts();
    }, [data]);
    // 当前类型
    const { type } = useParams()
    // 当前内容
    const [title, setTitle] = useState('')
    const [nowMembers, setNowMembers] = useState([])
    useEffect(() => {
        const id = type;
        const theMembers = id === 'master'
            ? data.filter(item => {
                return moment(item.year).add(31, 'months').isAfter(moment());
            })
            : data.filter(item => {
                return moment(item.year).add(31, 'months').isBefore(moment());
            })
        const theTitle = id === 'master' ? '研究生' : '毕业生'
        if (theMembers) {
            setNowMembers(theMembers);
        }
        if (theTitle) {
            setTitle(theTitle)
        }
    }, [data, document.location])
    const component = (
        <>
            <Title title={title} />
            <div className='members-list'>
                {
                    nowMembers.map(item => {
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
export default connect(
    state => ({
        data: state.members
    }),
    { getMembers }
)(Members);
