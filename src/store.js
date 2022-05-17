import { configureStore } from "@reduxjs/toolkit";
import profileFormReducer from './components/profile-form/profileFormSlice';
import checkInFormReducer from './components/check-in-form/checkInFormSlice';


export const store = configureStore({
    reducer : {
        profileForm : profileFormReducer,
        checkInForm : checkInFormReducer
    }
});