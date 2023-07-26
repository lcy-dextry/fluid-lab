import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import moment from 'moment'
// 组件
const Home = React.lazy(_ => import('@/pages/Home'))
const Links = React.lazy(_ => import('@/pages/Links'))
const Members = React.lazy(_ => import('@/pages/Members'))
const Publication = React.lazy(_ => import('@/pages/Publication'))
const Research = React.lazy(_ => import('@/pages/Research'))
const Tutor = React.lazy(_ => import('@/pages/Tutor'))
const Activity = React.lazy(_ => import('@/pages/Activity'))
const News = React.lazy(_ => import('@/pages/News'))
const Gallery = React.lazy(_ => import('@/pages/Gallery'))
const DetailNew = React.lazy(_ => import('@/pages/DetailNew'))

export default function RoutesMap() {
    const routes = useRoutes([
        { path: '', element: <Navigate to='/home' /> },
        { path: '/home', element: <Home /> },
        { path: '/tutor', element: <Navigate to='/tutor/brief' /> },
        { path: '/tutor/:type', element: <Tutor /> },
        { path: '/research', element: <Navigate to='/research/cfd' /> },
        { path: '/research/:type', element: <Research /> },
        { path: '/publication', element: <Navigate to={`/publication/${moment().year()}`} /> },
        { path: '/publication/:year', element: <Publication /> },
        { path: '/members', element: <Navigate to='/members/master' /> },
        { path: '/members/:type', element: <Members /> },
        { path: '/links', element: <Links /> },
        { path: '/activity', element: <Navigate to='/activity/group' /> },
        { path: '/activity/:gallery', element: <Activity /> },
        { path: '/detail', element: <Gallery /> },
        { path: '/news', element: <News /> },
        { path: '/news/:id', element: <DetailNew /> }
    ])
    return routes
}
