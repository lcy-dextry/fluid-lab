import { GET_MEMBERS } from '../constant';

const initState = [];
export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_MEMBERS:
            return data;
        default:
            return preState;
    }
}
