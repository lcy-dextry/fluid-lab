import { GET_RESEARCH_TEXT } from '../constant';

const initState = [];
export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_RESEARCH_TEXT:
            return data;
        default:
            return preState;
    }
}
