import logo from "./../../../../assets/logo 3.jpg";
import animationPic from "./../../../../assets/animation.gif";
export default function Login() {
  return (
    <div className="bg-white h-[100vh] flex justify-center items-center">

        <div className="h-[70vh] w-[80%] bg-[#040710] grid lg:grid-cols-2 shadow">
                    <div className="flex justify-center items-center">
                        <img src={animationPic} alt="" width="70%" />
                    </div>
                    <div className="flex justify-center items-center flex-col gap-5 border-l">
                        <img src={logo} alt="" width="350px" />
                        <button className="text-[#542BD8] text-[20px] font-semibold py-2 px-10 rounded-md bg-white"> 
                            Login with Google 
                        </button>
                        <button className="text-white text-[20px] font-semibold py-2 px-10 rounded-md bg-[#542BD8] hover:bg-[#38276e] duration-300"> 
                            Login with Google 
                        </button>
                    </div>
        </div>
    </div>
  )
}
