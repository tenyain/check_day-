import { createSlice } from "@reduxjs/toolkit";

export const profileFormSlice = createSlice({
    name: 'profileForm',
    initialState : {
        userName : ''
    },
    reducers : {
        setUserName : (state, action) => {
            state.userName = action.payload;
        }
    }
});

export const { setUserName } = profileFormSlice.actions;
export default profileFormSlice.reducer;