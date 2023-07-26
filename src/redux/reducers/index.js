import { combineReducers } from "redux";
import carousel from './carousel'
import tutorText from './tutorText';
import publication from './publication';
import members from './members';
import news from './news';
import activity from './activity';
import researchText from './researchText';

const reducer = combineReducers({
    carousel,
    tutorText,
    researchText,
    publication,
    members,
    news,
    activity,
});
export default reducer;