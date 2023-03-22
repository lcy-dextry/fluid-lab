import React, { memo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import { connect } from 'react-redux';
// 组件
import { Carousel } from 'antd';
// 数据
import { db } from '@/utils/cloudBase';
import { getCarouselImg } from '@/redux/actions'
// 样式
import './style.less'

const CarouselBox = memo(({
    imgs,
    getCarouselImg
}) => {
    const [img, setImg] = useState([]);
    // 获取
    const getNewImgs = () => {
        db.collection('carousel')
            .get()
            .then(res => {
                getCarouselImg(res.data);
            });
    };
    useDeepCompareEffect(() => {
        getNewImgs();
        setImg(imgs)
    }, [imgs]);

    return (
        <div className='top-part'>
            <div className='filter' />
            <Carousel autoplay>
                {
                    img.map(item => {
                        return (
                            <div key={item._id}>
                                <img src={item.img} alt='carousel imgs' />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
})
export default connect(
    state => ({
        imgs: state.carousel
    }),
    { getCarouselImg }
)(CarouselBox);