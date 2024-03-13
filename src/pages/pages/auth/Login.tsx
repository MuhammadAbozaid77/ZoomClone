import logo from "./../../../assets/logo 3.jpg";
import animationPic from "./../../../assets/animation.gif";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, userRef } from "../../../firebaseConfig/FirebaseConfig";
import { getDocs, addDoc, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../storeRedux/authSlice/authSlice";
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    onAuthStateChanged(auth , (currentUser)=>{
        if(currentUser){
            navigate("/login")
        }
    });
    const handelLogin = async ()=>{
        // Auth With Google
        const provider = new GoogleAuthProvider();
        const {user:{displayName , email , uid}} = await signInWithPopup(auth , provider);
        // console.log(displayName,email,uid);
//----------------------------------------------------------------
        // Store Data in FireStore
        if(email){
            // Query
            const firestoreQuery = query(userRef , where("uid" , "==" , uid));
            // Get Docs
            const fetchLogin = await getDocs(firestoreQuery);
            // Add Doc
            if(fetchLogin.docs.length === 0){
                await addDoc(userRef , {
                    uid , 
                    name:displayName , 
                    email
                })
            }
        }
        dispatch(setUser({uid , name:displayName , email}));
        navigate("/");
    };

    
    
  return (
    <div className="bg-[#040710] h-[100vh] flex justify-center items-center">

        <div className="h-[70vh] w-[80%] bg-[#040710] grid lg:grid-cols-2 shadow">
            <div className="flex justify-center items-center">
                <img src={animationPic} alt="" width="70%" />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 border-l">
                <img src={logo} alt="" width="350px" />
                <button className="text-[#e24343] w-[50%] text-[20px] font-semibold py-2 px-10 rounded-md bg-white"
                    onClick={handelLogin}
                > 
                    Login with Google 
                </button>
            </div>
        </div>
    </div>
  )
}
