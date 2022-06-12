import { combineReducers } from 'redux'
import commentReducer from './commentReducer'
import allcommentsReducer from './allCommentsReducer'
import getCommentsReducer from './getCommentsReducer';

const reducer = combineReducers ({
    comment: commentReducer,
    allComments: allcommentsReducer,
    getComments: getCommentsReducer
});

export default reducer;

export type State = ReturnType<typeof reducer>