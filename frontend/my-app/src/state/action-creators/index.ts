import { Dispatch } from "react"
import { allCommentsActionType, commentActionType, commentsActionType } from "../actions/index"
import axios from 'axios'

export const addComment = (author: String, text: String, cBId: Number | null, cId: Number | null) => {

    return async (dispatch: Dispatch<commentActionType>) => {
        const res = await axios.post(`http://localhost:8080/comment/addComment`, 
        {name: author, text: text, commentBoardId: cBId, commentId: cId})
            dispatch( {
                type: "addCommentInState",
                webCode: res.data.id
        })
    }
}

export const getAllComments = () => {

    return async (dispatch: Dispatch<allCommentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})
            dispatch( {type: "listOfComments", listOfComments: res.data })}
}
export async function getAllCommentsImproved() {
    const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})

    return res.data
}


export const getComments = (id: Number) => {
    return async (dispatch: Dispatch<commentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getComment/` + id, 
        {})
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



