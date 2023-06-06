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
          <Link to="/forum" >
          <li>Forum</li>
          </Link>
        </ul>
    </div>
  )
}

export default header