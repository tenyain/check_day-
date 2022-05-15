import { configureStore } from "@reduxjs/toolkit";
import profileFormReducer from './components/profile-form/profileFormSlice';


export const store = configureStore({
    reducer : {
        profileForm : profileFormReducer
    }
});