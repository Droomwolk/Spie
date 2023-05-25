import Spie from '../../assets/img/Spie.jpg'
import Caf from '../../assets/img/Caf.png'
import Cap from '../../assets/img/Cap.png'
import Mdph from '../../assets/img/Mdph.jpg'
import Mile from '../../assets/img/Mile.png'
import Msa from '../../assets/img/Msa.png'
import Pole from '../../assets/img/Pole.png'
import styled from 'styled-components';
import '../../styles/main.scss'

const footer = () => {
const SPIE = styled.div``;
const POLE = styled.div``;
const CAP = styled.div``;
const MILE = styled.div``;
const MDPH = styled.div``;
  return (
    <div className='footer'>
        <SPIE className='footer__spie'>
            <img src={Spie} alt="logo" className='footer__spie-logo'/>
            <p style={{marginTop: '1em'}} >SPIE, votre passerelle vers l'emploi en Guadeloupe. <br/> 
            Ensemble, nous bâtissons un avenir prometteur. <br/> </p>
            {/* et renforçons la dynamique économique de notre territoire.</p> */}
            <div className='footer__spie-logo-group'>
                <ul className='footer__spie-logo-group-list'>
                    <li>
                        <img src={Caf} alt="logo" style={{borderRadius: '50%', width: '2em'}} />
                    </li>
                    <li>
                        <img src={Cap} alt="logo" style={{borderRadius: '50%', width: '2em'}}/>
                    </li>
                    <li>
                        <img src={Mdph} alt="logo" style={{borderRadius: '50%', width: '2em'}}/>
                    </li>
                    <li>
                        <img src={Mile} alt="logo" style={{borderRadius: '50%', width: '2em'}}/>
                    </li>
                    <li>
                        <img src={Msa} alt="logo" style={{borderRadius: '50%', width: '2em'}}/>
                    </li>
                </ul>
            </div>
        </SPIE>
        <POLE className='footer__pole'>
            <ul style={{lineHeight: '1.8'}}>
                <li style={{fontWeight:'bold'}}>Pôle Emploi</li>
                <li>À propos</li>
                <li>Services</li>
                <li>Aides</li>
            </ul>
        </POLE>
        <CAP className='footer__cap'>
            <ul style={{lineHeight: '1.8'}}>
                <li style={{fontWeight:'bold'}}>Cap Emploi</li>
                <li>À propos</li>
                <li>Services</li>
                <li>Aides</li>
            </ul>
        </CAP>
        <MDPH className='footer__mdph'>
            <ul style={{lineHeight: '1.8'}}>
                <li style={{fontWeight:'bold'}}>Mdph</li>
                <li>À propos</li>
                <li>Services</li>
                <li>Aides</li>
            </ul>
        </MDPH>
        <MILE className='footer__mile'>
            <ul style={{lineHeight: '1.8'}}>
                <li style={{fontWeight:'bold'}}>Mile</li>
                <li>À propos</li>
                <li>Services</li>
                <li>Aides</li>
            </ul>
        </MILE>
    </div>
  )
}

export default footer