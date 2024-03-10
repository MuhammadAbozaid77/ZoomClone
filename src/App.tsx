import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/pages/home/Home";



function App() {

  const routers = createBrowserRouter([
    {path:"/" , element:<MainLayout /> , children : [
      {path : "home" , element : <Home/>}
    ] }
  ])

  return (
    <RouterProvider router={routers} />
  )
}

export default App;
