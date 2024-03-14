import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/pages/auth/Login";
import Dashbord from "./pages/pages/Dashbord";
import CreateMeetings from "./pages/pages/CreateMeetings";
import MyMettings from "./pages/pages/MyMettings";
import MeetingSchedule from "./pages/pages/MeetingSchedule";
import SignUp from "./pages/pages/auth/SignUp";



function App() {

  const routers = createBrowserRouter([
    {path : "*" , element : <Dashbord />},
    {path:"login" , element : <Login />},
    {path:"signup" , element : <SignUp />},
    {path:"createMeeting" , element : <CreateMeetings />},
    {path:"myMeeting" , element : <MyMettings />},
    {path:"meetingSchedule" , element : <MeetingSchedule />},
  ])

  return (
    <RouterProvider router={routers} />
  )
}

export default App;
