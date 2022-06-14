import { Dispatch } from "react"
import { allCommentsActionType, commentActionType, commentsActionType } from "../actions/index"
import axios from 'axios'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useDispatch } from "react-redux"

export const addComment = (author: String, text: String, cBId: Number | null, cId: Number | null) => {
    console.log("YOOO")
    return async (dispatch: Dispatch<commentActionType>) => {
        const res = await axios.post(`http://localhost:8080/comment/addComment`, 
        {name: author, text: text, commentBoardId: cBId, commentId: cId})
        console.log("ADDCOMMENT",res.data)
            dispatch( {
                type: "addCommentInState",
                webCode: res.data.id
        })
    }
}

export const getAllComments = () => {
    console.log("getAllComments")

    return async (dispatch: Dispatch<allCommentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})
            dispatch( {type: "listOfComments", listOfComments: res.data })}
}
export async function getAllCommentsImproved() {
    console.log("YOOO")
    const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})

    return res.data
}


export const getComments = (id: Number) => {
    console.log("HERE")
    return async (dispatch: Dispatch<commentsActionType>) => {
        console.log("IDDDD", id)
        const res = await axios.get(`http://localhost:8080/comment/getComment/` + id, 
        {})
        console.log(res.data)
        let cId = 0;

        if(res.data.length !== 0){
            const object = res.data[0]
            cId = object['CommentId']
        }
            dispatch( {
                type: "commentsOnPost",
                comments: res.data,
                id: cId
    })}
}



