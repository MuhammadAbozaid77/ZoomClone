import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/pages/home/auth/Login";
import Dashbord from "./pages/pages/Dashbord";



function App() {

  const routers = createBrowserRouter([
    {path : "*" , element : <Dashbord />},
    {path:"login" , element : <Login />},
  ])

  return (
    <RouterProvider router={routers} />
  )
}

export default App;
