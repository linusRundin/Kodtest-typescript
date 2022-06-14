
import { configureStore } from '@reduxjs/toolkit'
import reducers from "./reducer/index";
import slice from "./commentSlice"
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

 /*
export const store = configureStore({
    reducer: reducers,
    preloadedState: initalState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
*/

export const store = configureStore({
    reducer: {
        comments: slice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch