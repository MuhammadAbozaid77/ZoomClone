import { createSlice } from "@reduxjs/toolkit";

interface TInitialStateAuth {
    error : null,
    isLoading : null,
    data : [],
}
const initialState:TInitialStateAuth = {
    error : null,
    isLoading : null,
    data : [],
};
export const authSlice = createSlice({
    name:"auth" , 
    initialState,
    reducers : {

    }
});


export const {} =  authSlice.actions;