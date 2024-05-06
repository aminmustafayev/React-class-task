import { Outlet } from "react-router"
import Navbar from "../../components/Admin/Navbar/Navbar"


const AdminRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default AdminRoot