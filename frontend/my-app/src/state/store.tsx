/**
 * This file contains the store of the redux implementation.
 */

import { configureStore } from '@reduxjs/toolkit'
import reducers from "./reducer/index";

type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    CommentBoardId: Number,
    createdAt: string,
    updatedAt: String;
  };

const emptyList: commentType[] = []

  type commentObjectType = {
    id: number,
    myComments: commentType[]
  }

 type state = {
    allComments: commentType[],
    comments: commentObjectType[]
  }
const commentList: commentObjectType[] = []

  const initalState = {
    allComments: emptyList,
    comments: commentList,
 } as state


export const store = configureStore({
    reducer: reducers,
    preloadedState: initalState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch