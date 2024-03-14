import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig/FirebaseConfig";


export const authSignUp = createAsyncThunk( "auth/authSignUp" , async (args , thunkAPI)=>{    
    const {rejectWithValue , fulfillWithValue} = thunkAPI;
    try {
        const data = await createUserWithEmailAndPassword(auth , args.userEmail , args.userPassword);
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error);
    }
});

// export const authSignIn = createAsyncThunk( "auth/authSignIn" , async (args , thunkAPI)=>{    
//     const {rejectWithValue , fulfillWithValue} = thunkAPI;
//     try {
        
//         const data = await createUserWithEmailAndPassword(auth , args.userEmail , args.userPassword);
//         console.log(data);
//         return fulfillWithValue(data)
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

