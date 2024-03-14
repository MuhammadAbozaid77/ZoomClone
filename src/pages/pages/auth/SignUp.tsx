import logo from "./../../../assets/finalLogo.png";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, userRef } from "../../../firebaseConfig/FirebaseConfig";
import { getDocs, addDoc, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../storeRedux/authSlice/authSlice";
import { useEffect, useState } from "react";
import { authSignUp } from "../../../storeRedux/authSlice/authActions";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     navigate("/login");
  //   }
  // });

//   const handelLogin = async () => {
//     // Auth With Google
//     const provider = new GoogleAuthProvider();
//     const {
//       user: { displayName, email, uid },
//     } = await signInWithPopup(auth, provider);
//     // console.log(displayName,email,uid);
//     //----------------------------------------------------------------
//     // Store Data in FireStore
//     if (email) {
//       // Query
//       const firestoreQuery = query(userRef, where("uid", "==", uid));
//       // Get Docs
//       const fetchLogin = await getDocs(firestoreQuery);
//       // Add Doc
//       if (fetchLogin.docs.length === 0) {
//         await addDoc(userRef, {
//           uid,
//           name: displayName,
//           email,
//         });
//       }
//     }
//     dispatch(setUser({ uid, name: displayName, email }));
//     navigate("/");
//   };

const [userEmail , setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const handelSignUp = ()=>{
    dispatch(authSignUp({userEmail,userPassword})).then((value) => {
      // console.log(value);
      // if(value?.payload?.user?.uid){
      //     console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      // }
      // else {
      //   console.log(value?.payload?.message);
      // }
    });
};

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="border px-5 py-10 rounded-lg md:w-[400px] shadow">
        <div className="flex justify-center items-center mb-10">
          <img src={logo} alt="" className="" />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
          >
            Email address
          </label>
          <input
            onChange={(e)=>setUserEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
          >
            Confirm password
          </label>
          <input
            onChange={(e)=>setUserPassword(e.target.value)}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handelSignUp}
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
