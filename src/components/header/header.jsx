import Spie from '../../assets/img/Spie.jpg'
import Cloche from '../../assets/img/cloche.gif'
import Homme from '../../assets/img/homme.png'
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className='header'>
      <Link to="/home">
        <img src={Spie} alt="logo" className='header__logo'/>
      </Link>
        <ul className='header__navigation'>
          <Link to="/spie">
            <li>Le SPIE</li>
          </Link>
          <Link to="/aides">
            <li>Service</li>
          </Link>
          <li>Actualités</li>
          <li>Contact</li>
        </ul>
        {/* <input type="search" placeholder='Rechercher' className='header__search' /> */}
        <Link to="/profil" >
         <div className='header__picture'>
            {/* <FaBell color='cyan' size={20}/> */}
            <img src={Cloche} alt="cloche" className='header__picture-cloche'/>
            <img src={Homme} alt="Avatar" className='header__picture-homme'/>
            <p>Nom Prénom</p>
         </div>
        </Link>
    </div>
  )
}

export default header