import logo from "./../../../assets/logo 3.jpg";
import animationPic from "./../../../assets/animation.gif";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, userRef } from "../../../firebaseConfig/FirebaseConfig";
import { getDocs, addDoc, query, where } from "firebase/firestore";
export default function Login() {

    const handelLogin = async ()=>{
        // Auth With Google
        const provider = new GoogleAuthProvider();
        const {user:{displayName , email , uid}} = await signInWithPopup(auth , provider);
        // console.log(displayName,email,uid);
//----------------------------------------------------------------
        // Store Data in FireStore
        if(email){
            const firestoreQuery = query(userRef , where("uid" , "==" , uid));
            console.log("firestoreQuery" , firestoreQuery);

            const fetchLogin = await getDocs(firestoreQuery);

            if(fetchLogin.docs.length === 0){
                await addDoc(userRef , {
                    uid , 
                    name:displayName , 
                    email
                })
            }
        }
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
