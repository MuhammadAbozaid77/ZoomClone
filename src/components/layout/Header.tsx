import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../storeRedux/reduxHooks";
import { useDispatch } from "react-redux";
import { useState } from "react";
import logo from "./../../assets/finalLogo.png";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig/FirebaseConfig";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userName = useAppSelector((zoom) => zoom.auth.userInfo);
  console.log(userName);
  

  const logoutFun = () => {
    signOut(auth);
  };

  return (
    <header>
      <div className="flex justify-between items-center border px-5 py-2">
        <div>
          <img src={logo} className="mr-3 h-6 sm:h-9 w-[100%]" alt="Logo" />
        </div>
        <div className="text-[20px] font-extrabold">
          <span className="text-[#d13d58]"> Hello </span>
          <span className="font-normal"> {userName?.name} </span>
        </div>
        <div>
          <button
            onClick={logoutFun}
            className="p-2 rounded-md font-bold border bg-[#d13d58] hover:bg-[#F13052] duration-100 text-gray-100 flex  justify-between items-center gap-2 capitalize"
          >
            <span>
              {" "}
              <FiLogOut />{" "}
            </span>
            <span> logout </span>
          </button>
        </div>
      </div>
    </header>
  );
}
