import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

export default function MainLayout() {


  return (
    <>
        <Header />
        <Outlet />   
        <Footer />
    </>
  )
}
