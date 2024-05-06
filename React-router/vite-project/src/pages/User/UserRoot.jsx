import React from 'react'
import Navbar from '../../components/User/Navbar/Navbar'
import {Outlet } from "react-router-dom"
const UserRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default UserRoot