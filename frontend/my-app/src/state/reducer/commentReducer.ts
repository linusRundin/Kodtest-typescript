import { commentActionType } from "../actions/index"



const reducer = (state: Object = {}, action: commentActionType ) => {

    switch (action.type){
        case "comment":
            return state = {commentBoardId: action.webCode};
        default:
            return state;
    }
}

export default reducer;