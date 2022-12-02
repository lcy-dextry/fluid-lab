import React, { memo, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// 组件
import { ActivityWrapper } from './style'
import Banner from 'c/banner';
import Content from 'c/content'
import GalleyMenu from './components/gallery-menu';
import LocationBox from './components/location-box';
// 数据
import { galleryList } from '@/common/local';
import { findGalleryName } from '@/utils/functions';
import { db } from '@/utils/cloudBase';
import { getActivity } from '@/redux/actions';

const Activity = memo(({
    activity,
    getActivity
}) => {
    const { gallery } = useParams()
    // 获取
    const [text, setText] = useState([]);
    const getNewTexts = () => {
        db.collection('activity')
            .get()
            .then(res => {
                getActivity(res.data);
            });
    };
    useEffect(() => {
        getNewTexts();
        setText(activity);
    }, [activity]);
    // 当前内容
    const [nowText, setNowText] = useState([])
    useEffect(() => {
        const id = gallery;
        const theText = activity.filter(item => item.type === findGalleryName(id, galleryList));
        if (theText) {
            setNowText(theText);
        }
    }, [activity, document.location]);

    const component = (
        <>
            <GalleyMenu />
            <div className='right-part'>
                <LocationBox gallery={findGalleryName(gallery, galleryList)} />
                <ul className='gallery-list'>
                    {
                        nowText.map(item => {
                            return (
                                <NavLink
                                    className='gallery-item'
                                    key={item.title}
                                    to={`/detail?id=${item._id}`}
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
export default connect(
    state => ({
        activity: state.activity
    }),
    { getActivity }
)(Activity);