import moment from 'moment/moment'
import React, { memo } from 'react'
// 样式
import './style.less'

const StudentCard = memo((props) => {
    const { img = '', name = '', year = '', email = '' } = props
    return (
        <div className='student-card-wrapper'>
            <img className='photo' alt='' src={img} />
            <div className='stu-msg'>
                <div className='name'>
                    {`${name}（${moment(year).year()} 级）`}
                </div>
                <div className='email'>
                    {email}
                </div>
            </div>
        </div>
    )
})

export default StudentCard