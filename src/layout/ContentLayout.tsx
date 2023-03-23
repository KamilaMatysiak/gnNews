import React from 'react'
import MainContent from '../components/MainContent/MainContent'
import Sidebar from '../components/Sidebar/Sidebar'
import { useAppSelector } from '../app/hooks'

const ContentLayout = () => {
  const sidebarState = useAppSelector(state => state.sidebar.open)
  return (
    <div className={`content-layout ${sidebarState && 'sidebar-shown'}`}>
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default ContentLayout