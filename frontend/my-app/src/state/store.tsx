import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer/index";
import thunk from "redux-thunk"
type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    createdAt: string,
    updatedAt: String;
  };
type commentListType = {
    allComments: commentType[],
    comments: commentType[],
  };

const emptyList: commentType[] = []

const initalState = {
    allComments: emptyList,
    comments: emptyList,
 }
export const store = createStore(
    reducers,
    initalState,
    applyMiddleware(thunk)

)