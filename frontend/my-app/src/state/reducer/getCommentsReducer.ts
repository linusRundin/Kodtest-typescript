import {commentsActionType}  from "../actions/index"



const reducer = (state: Array<Object> = [], action: commentsActionType ) => {

    switch (action.type){
        case "commentsOnPost":
            return state = action.comments;
        default:
            return state = []
    }
}

export default reducer;