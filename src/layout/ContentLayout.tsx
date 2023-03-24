import MainContent from '../components/MainContent/MainContent'
import Sidebar from '../components/Sidebar/Sidebar'

import { useAppSelector } from '../app/hooks'
import { Routes, Route } from 'react-router-dom'

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