import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// 组件
import { ActivityWrapper } from './style'
import Banner from 'c/banner';
import Content from 'c/content'
import GalleyMenu from './components/gallery-menu';
import LocationBox from './components/location-box';
// 数据
import { galleryList, picsList } from '@/common/local';
import { findGalleryName } from '@/utils/functions';

const Activity = memo(() => {
    const { gallery } = useParams()
    const showList = picsList.filter(item => {
        return item.gallery === gallery + ''
    })

    const component = (
        <>
            <GalleyMenu />
            <div className='right-part'>
                <LocationBox gallery={findGalleryName(gallery, galleryList)} />
                <ul className='gallery-list'>
                    {
                        showList.map(item => {
                            return (
                                <NavLink
                                    className='gallery-item'
                                    key={item.title}
                                    to={`/activity/${gallery}/${item.location}`}
                                >
                                    {item.title}
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
    return (
        <>
            <Banner />
            <ActivityWrapper>
                <Content Component={component} />
            </ActivityWrapper>
        </>
    )
})
export default Activity