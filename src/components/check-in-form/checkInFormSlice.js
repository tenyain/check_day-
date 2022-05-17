import { createSlice } from "@reduxjs/toolkit";

export const checkInFormSlice = createSlice({
    name: 'checkInForm',
    initialState : {
        itemList : []
    },
    reducers : {
        addTaskItem : (state, action) => {
            state.itemList = [ ...state.itemList ,action.payload ];
            console.log("Actionsss")
        }
    }
});

export const { addTaskItem } = checkInFormSlice.actions;
export default checkInFormSlice.reducer;