import { GET_ACTIVITY } from '../constant';

const initState = [];
export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_ACTIVITY:
            return data;
        default:
            return preState;
    }
}
