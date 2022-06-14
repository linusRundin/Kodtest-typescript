import { Dispatch } from "react"
import { allCommentsActionType, commentActionType, commentsActionType } from "../actions/index"
import axios from 'axios'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useDispatch } from "react-redux"

interface Post {
    id: number
    name: string
  }
  

export const addComment = (author: String, text: String, cBId: Number | null, cId: Number | null) => {
    console.log("YOOO")
    return async (dispatch: Dispatch<commentActionType>) => {
        const res = await axios.post(`http://localhost:8080/comment/addComment`, 
        {name: author, text: text, commentBoardId: cBId, commentId: cId})
            dispatch( {
                type: "comment",
                webCode: res.data
    })}
}

export const getAllComments = () => {
    console.log("YOOO")

    return async (dispatch: Dispatch<allCommentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})
            dispatch( {type: "listOfComments", listOfComments: res.data })}
}
export async function getAllCommentsImproved() {
    console.log("YOOO")
    const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})

    return res.data
}


export const getComments = (id: Number | null) => {
    console.log("HERE")
    if(id === null) {
    return async (dispatch: Dispatch<allCommentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getAllComments`, 
        {})
        console.log("GETCOMMENTS", res.data)
            dispatch( {
                type: "listOfComments",
                listOfComments: res.data
    })}
    } else {
    return async (dispatch: Dispatch<commentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getComment/` + id, 
        {})
            dispatch( {
                type: "commentsOnPost",
                comments: res.data
    })}
}
}


