import { GET_TUTOR_TEXT } from '../constant';

const initState = [];
export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_TUTOR_TEXT:
            return data;
        default:
            return preState;
    }
}
