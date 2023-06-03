import { Routes, Route, useLocation } from "react-router-dom";
import Header from '../components/header/header'
import Profil from '../pages/profil/profil'
import Homepage from '../pages/homepage/homepage'
import Homepage2 from '../pages/homepage2/homepage2'
import Footer from '../components/footer/footer'
import Calendar from '../components/calendar/calendar'
import Aides from '../pages/aides/aides'
import Spie from '../pages/spie/spie'
// import 'react-calendar/dist/Calendar.css';
import data from '../data/data'
import '../styles/main.scss'

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Header/>
      {/* {location.pathname !== '/profil' && <Header/>} */}
      <Routes path="/" element={<App />}>
        {/* <Homepage/> */}
        <Route path="home" element={<Homepage2/>} />
        <Route path="aides" element={<Aides datas={data} />} />
        <Route path="profil" element={<Profil />} />
        <Route path="spie" element={<Spie/>} />
        <Route path="calendar" element={<Calendar/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
