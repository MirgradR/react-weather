const SEARCH = 'SEARCH'

export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload.text
        default:
            return state
    }
}

export const searchActionCreator = (text) => {
    return {
        type: SEARCH,
        payload: text
    }
}