const initialState = {
    token: null,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return {...state, token: action.token};
        default:
            return state;
    }
}