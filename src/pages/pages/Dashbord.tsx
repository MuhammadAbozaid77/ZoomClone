import { useNavigate } from "react-router-dom";
import userAuth from "../../hooks/userAuth";
import { FaVideo } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import Header from "../../components/layout/Header";

export default function Dashbord() {
  userAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh]">
        {/* --------------- Header ------------------ */}
        <div>
          <Header />
        </div>
        {/* --------------- Cards ------------------ */}
        <div className="flex justify-center items-center h-[100%]">
          <div className="md:w-[90%] p-5 md:flex justify-center items-center ">
            <div className="w-[100%] flex justify-center items-center">
              <div
                onClick={() => navigate("/createMeeting")}
                className="w-[100%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex justify-center items-center mb-5">
                  <div className="w-[100px] h-[100px] flex justify-center items-center p-1 border bg-[#F13052] rounded-xl">
                    <RiAddBoxFill size={40} color="white" />
                  </div>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Create Metting
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Create new meeting and invite people.
                </p>
              </div>
            </div>
            {/* --------------- Cards ------------------ */}
            <div className="w-[100%]">
              <div
                onClick={() => navigate("/")}
                className="w-[100%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex justify-center items-center mb-5">
                  <div className="w-[100px] h-[100px] flex justify-center items-center p-1 border bg-[#F13052] rounded-xl">
                    <FaVideo size={40} color="white" />
                  </div>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  My Meetings
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  View Your Crated meeting.
                </p>
              </div>
            </div>
            {/* --------------- Cards ------------------ */}
            <div className="w-[100%]">
              <div
                onClick={() => navigate("/")}
                className="w-[100%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex justify-center items-center mb-5">
                  <div className="w-[100px] h-[100px] flex justify-center items-center p-1 border bg-[#F13052] rounded-xl">
                    <BsCalendar2DateFill size={40} color="white" />
                  </div>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Meetings
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  View meetings thayou are invited to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
