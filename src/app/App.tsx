import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ContentLayout from "../layout/ContentLayout"
import { useAppSelector } from "./hooks"


function App() {
  const lightMode = useAppSelector(state => state.lightMode.mode)
  return (
    <div className={`${lightMode === "dark" ? 'dark-theme' : 'light-theme'} app`}>
      <Navbar/>
    <ContentLayout/>
    <Footer/>
    </div>
  )
}

export default App
