import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addToken:  (state, action) => {
            state.token = action.payload;
        },
        removeState: (state) => {
            state.token = null;
            state.user = null;
        },
        addUserInfo: (state, action) => {
            state.user = action.payload;
        },
    },
})

export const {addToken, removeState, addUserInfo} = authSlice.actions;

export default authSlice.reducer;