const initialState = {
    user: [],
    loading: false,
    error: null
}

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SIGN_IN":
            return {
                ...state,
                loading: true,
                error: null
            }

        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case "FETCH_USER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error,
                user: []
            }
        default:
            return state
    }
}