import { combineReducers } from "redux";
import carousel from './carousel'
import tutorText from './tutorText';
import publication from './publication';
import members from './members';
import news from './news';
import activity from './activity';

const reducer = combineReducers({
    carousel,
    tutorText,
    publication,
    members,
    news,
    activity,
});
export default reducer;