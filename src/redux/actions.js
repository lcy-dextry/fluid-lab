import {
    GET_ACTIVITY,
    GET_CAROUSEL_IMG,
    GET_MEMBERS,
    GET_NEWS,
    GET_PUBLICATION,
    GET_TUTOR_TEXT,
} from "./constant";

// 获得Carousel页面数据
export const getCarouselImg = data => ({
    type: GET_CAROUSEL_IMG,
    data,
});
// 获得Tutor页面数据
export const getTutorText = data => ({
    type: GET_TUTOR_TEXT,
    data,
});
// 获得Publication页面数据
export const getPublication = data => ({
    type: GET_PUBLICATION,
    data,
});
// 获得Members页面数据
export const getMembers = data => ({
    type: GET_MEMBERS,
    data,
})
// 获得News页面的数据
export const getNews = data => ({
    type: GET_NEWS,
    data,
})
// 获得Activity页面的数据
export const getActivity = data => ({
    type: GET_ACTIVITY,
    data,
})