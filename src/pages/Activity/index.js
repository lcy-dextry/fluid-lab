import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// 组件
import Banner from 'c/banner';
import Content from 'c/content'
import GalleyMenu from './components/gallery-menu';
import LocationBox from './components/location-box';
// 数据
import { galleryList } from '@/common/local';
import { findGalleryName } from '@/utils/functions';
import { db } from '@/utils/cloudBase';
import { getActivity } from '@/redux/actions';
// 样式
import './style.less'

const Activity = memo(({
    activity,
    getActivity
}) => {
    const { gallery } = useParams()
    // 当前内容
    const [nowText, setNowText] = useState([])
    const getNewTexts = () => {
        db.collection('activity')
            .get()
            .then(res => {
                getActivity(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewTexts();
    }, [activity]);
    useDeepCompareEffect(() => {
        const id = gallery;
        const theText = activity.filter(item => item.type === findGalleryName(id, galleryList));
        if (theText) {
            setNowText(theText);
        }
    }, [activity, gallery]);

    const component = (
        <>
            <GalleyMenu gallery={findGalleryName(gallery, galleryList)} />
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
        <div className='activity-wrapper'>
            <Banner />
            <Content Component={component} />
        </div>
    )
})
export default connect(
    state => ({
        activity: state.activity
    }),
    { getActivity }
)(Activity);