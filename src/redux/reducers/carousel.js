import { GET_CAROUSEL_IMG } from '../constant';

const initState = [];
export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_CAROUSEL_IMG:
            return data;
        default:
            return preState;
    }
}
