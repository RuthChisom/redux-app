const initialState = {
    message: "Do you understand Reducers?"
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    if(action.type === "Message change"){
        newState.message = "Reducers simply display the same result, but make execution faster (Optimization)";
    }
    return newState;
}

export default reducer;