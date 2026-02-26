import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  return (
    <div>
        <NavBar/>
         <div className="flex">
        <Sidebar />
        <div className="flex p-6">
            <Outlet />
        </div>

    </div>
    </div>
  )
}

export default Dashboard