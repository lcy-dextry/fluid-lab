import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import moment from 'moment'
// 组件
import Home from '@/pages/Home'
import Links from '@/pages/Links'
import Members from '@/pages/Members'
import Publication from '@/pages/Publication'
import Research from '@/pages/Research'
import Tutor from '@/pages/Tutor'
import Activity from '@/pages/Activity'
import News from '@/pages/News'
import Gallery from '@/pages/Gallery'
import DetailNew from '@/pages/DetailNew'

export default function RoutesMap() {
    const routes = useRoutes([
        { path: '', element: <Navigate to='/home' /> },
        { path: '/home', element: <Home /> },
        { path: '/tutor', element: <Navigate to='/tutor/brief' /> },
        { path: '/tutor/:type', element: <Tutor /> },
        { path: '/research', element: <Research /> },
        { path: '/publication', element: <Navigate to={`/publication/${moment().year()}`} /> },
        { path: '/publication/:year', element: <Publication /> },
        { path: '/members', element: <Navigate to='/members/master' /> },
        { path: '/members/:type', element: <Members /> },
        { path: '/links', element: <Links /> },
        { path: '/activity', element: <Navigate to='/activity/group' /> },
        { path: '/activity/:gallery', element: <Activity /> },
        { path: '/activity/group/:name', element: <Gallery /> },
        { path: '/activity/events/:name', element: <Gallery /> },
        { path: '/news', element: <News /> },
        { path: '/news/:title', element: <DetailNew /> }
    ])
    return routes
}
