/**
 * This file contains the functions to communicate with the server.
 */

import { Dispatch } from "react"
import { allCommentsActionType, commentActionType, commentsActionType } from "../actions/index"
import axios from 'axios'


/**
 * This function adds a comment to the database and updates the state
 * @param author 
 * @param text 
 * @param cBId 
 * @param cId 
 * @returns 
 */
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

/**
 * This function makes a request to update the 
 * comments on the main page and updates the state
 * @returns 
 */
export const getAllComments = () => {

    return async (dispatch: Dispatch<allCommentsActionType>) => {
        const res = await axios.get(`http://localhost:8080/comment/getAllComments`, {})
            dispatch( {type: "listOfComments", listOfComments: res.data })}
}

/**
 * This function makes a request to recieve the 
 * comments that are connected to the given id and updates the state
 * @param id 
 * @returns 
 */
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



