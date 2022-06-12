import { combineReducers } from 'redux'
import allcommentsReducer from './allCommentsReducer'
import getCommentsReducer from './getCommentsReducer';

/*
const reducer = combineReducers ({
    allComments: allcommentsReducer
});
*/

export default allcommentsReducer;

export type State = ReturnType<typeof allcommentsReducer>