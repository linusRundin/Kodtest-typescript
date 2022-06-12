import { Dispatch } from "react"
import { allCommentsActionType, commentActionType, commentsActionType } from "../actions/index"
import axios from 'axios'

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
        const res = await axios.get(`http://localhost:8080/comment/getAllComments`, 
        {})
            dispatch( {
                type: "listOfComments",
                listOfComments: res.data
    })}
}

export const getComments = (id: Number) => {
    console.log("HERE")
    return async (dispatch: Dispatch<commentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getComment/` + id, 
        {})
            dispatch( {
                type: "commentsOnPost",
                comments: res.data
    })}
}


