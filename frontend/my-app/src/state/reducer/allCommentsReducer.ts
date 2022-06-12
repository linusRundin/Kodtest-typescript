import { allCommentsActionType } from "../actions/index"



const reducer = (state: Array<Object> = [], action: allCommentsActionType ) => {

    switch (action.type){
        case "listOfComments":
            return state = action.listOfComments;
        default:
            return state = []
    }
}

export default reducer;