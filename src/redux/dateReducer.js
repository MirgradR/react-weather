import { countDate } from "./extraFunction/countLocalDate"

const GET_DATE = 'GET-DATE'

const initialState = {}

export const getDate = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATE: 
            return action.payload
        default:
            return state
    }
}

export const getDateActionCreator = (time) => {
    return {
        type: GET_DATE,
        payload: time
    }
}

export const countDateThunkCreator = (timezone) => {
    return (dispatch) => {
        dispatch(getDateActionCreator(countDate(timezone)))
    
    }
}



