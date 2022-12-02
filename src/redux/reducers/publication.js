import { GET_PUBLICATION } from '../constant';

const initState = [];
export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_PUBLICATION:
            return data;
        default:
            return preState;
    }
}
