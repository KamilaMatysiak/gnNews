import React from 'react'

import Sidebar from '../components/Sidebar/Sidebar'
import { useAppSelector } from '../app/hooks'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import MainContent from '../components/MainContent/MainContent'

const ContentLayout = () => {
  const sidebarState = useAppSelector(state => state.sidebar.open)
  return (
    <div className={`content-layout ${sidebarState && 'sidebar-shown'}`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/country/:country" element={<MainContent />} />
      </Routes>
    </div>
  )
}

export default ContentLayout