import { createSlice } from "@reduxjs/toolkit";
import { authSignUp } from "./authActions";

interface TInitialStateAuth {
        uid : string,
        email :string,
        name : string,
        logInError : string,
        signUpError : string,
        logInSuccessful : string,
        signUpSuccessful : string,
}
const initialState:TInitialStateAuth = {
      uid : "",
      email :"",
      name : "",
      logInError : "",
      signUpError : "",
      logInSuccessful : "",
      signUpSuccessful : "",
};
export const authSlice = createSlice({
    name:"auth" , 
    initialState,
    reducers : {
        setUser : (state , action)=>{
            state = action.payload;
        }
    },
    extraReducers :  (builder) => {
    /* --------------------------------------------  -------------------------------------------- */
      builder.addCase(authSignUp.pending, (state) => {
      })
      builder.addCase(authSignUp.fulfilled, (state, { payload }) => {
        console.log(payload);
        
        // if(payload?.user?.uid){
        //   state?.signUpSuccessful = "Registiration Successfuly";
        // }
        // else{
        //   state?.signUpError = payload?.message
        // }
      })
      builder.addCase(authSignUp.rejected, (state) => {
      })
      /* ---------------------------------  ------------------------------------------------------------ */
    }
});


export const {setUser} =  authSlice.actions;