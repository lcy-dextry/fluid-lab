import moment from 'moment/moment'
import React, { memo } from 'react'
// 组件
import { StudentCardWrapper } from './style'

const StudentCard = memo((props) => {
    const { img = '', name = '', year = '', email = '' } = props
    return (
        <StudentCardWrapper>
            <img className='photo' alt='' src={img} />
            <div className='stu-msg'>
                <div className='name'>
                    {`${name}（${moment(year).year()} 级）`}
                </div>
                <div className='email'>
                    {email}
                </div>
            </div>
        </StudentCardWrapper>
    )
})

export default StudentCard