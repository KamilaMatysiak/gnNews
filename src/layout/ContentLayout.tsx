import React from 'react'
import MainContent from '../components/MainContent/MainContent'
import Sidebar from '../components/Sidebar/Sidebar'

const ContentLayout = () => {
  return (
    <div className='content-layout'>
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default ContentLayout