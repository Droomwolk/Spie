import CDG from '../../assets/img/CDG.jpg'
import Home from '../../assets/icon/home.png'
import Calendar from '../../assets/icon/calendar.png'
import Contact from '../../assets/icon/contact.png'
import Like from '../../assets/icon/like.png'
import Params from '../../assets/icon/params.png'
import Task from '../../assets/icon/task.png'
import Aide from '../../assets/icon/aide.png'


const asideBar = () => {
  return (
    <div className='asideBar'>
        <img src={CDG} alt="logo" className='asideBar__logo'/>
        <nav className='asideBar__nav'>
            <ul className='asideBar__nav-list'>
                <li>
                    <img src={Home} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
                <li>
                    <img src={Contact} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
                <li>
                    <img src={Calendar} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
                <li>
                    <img src={Task} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
            </ul>
        </nav>
        <nav className='asideBar__nav'>
            <ul className='asideBar__nav-list'>
                <li>
                    <img src={Like} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
                <li>
                    <img src={Aide} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
            </ul>
        </nav>
        <nav className='asideBar__nav'>
            <ul className='asideBar__nav-list'>
                <li>
                    <img src={Params} alt="logo" className='asideBar__nav-list-icon'/>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default asideBar