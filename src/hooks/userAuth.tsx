import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig/FirebaseConfig";
import { setUser } from "../storeRedux/authSlice/authSlice";

export default function userAuth() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate  = useNavigate();

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
    if(!currentUser){
      navigate("/")
    }
    else {
      dispatch(setUser({
            uid : currentUser.uid,
            email : currentUser.email,
            name : currentUser.displayName,
          }))
    }
  });

  return () => {
    unSubscribe();
  }
}, [dispatch , navigate]);

}
