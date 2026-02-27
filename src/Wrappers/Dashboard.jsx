import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Pages/Footer'
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="flex md:p-1 md:py-5 mx-auto">
          <Outlet />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Dashboard