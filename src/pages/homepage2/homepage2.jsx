import React from 'react'
import styled from 'styled-components'

import Insertion from '../../assets/img/Insertion.jpg'
import SPIE from '../../assets/img/SPIE.png'
import CDG from '../../assets/img/CDG.jpg'
import POLE from '../../assets/img/Pole.png'
import CAP from '../../assets/img/Cap.png'
import CAF from '../../assets/img/Caf.png'
import MILE from '../../assets/img/MileGwada.jpg'
import Partner from '../../components/partner/partner'
import Carousel from '../../components/caroussel/caroussel'
import Image from '../../components/imageborder/imageborder'
import ImageBorder from '../../components/imageborder/imageborder'
import Twitter from '../../assets/icon/twitter.png'
import Facebook from '../../assets/icon/facebook.png'
import Instagram from '../../assets/icon/instagram.png'
import Youtube from '../../assets/icon/youtube.png'
import Localisation from '../../assets/icon/marqueur.png'
import Emploi from '../../assets/icon/emploi.png'
import Aide from '../../assets/icon/aide.png'
import Contacts from '../../assets/icon/contacts.png'
import RendezVous from '../../assets/icon/rendezvous.png'
import Search from '../../assets/icon/search.png'
import Valide from '../../assets/icon/valide.png'
import Agenda from '../../components/agenda/agenda';

const Homepage2 = () => {

  const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 50px;
`;

const SearchIcon = styled.span`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #000;
`;

const SubmitIcon = styled.span`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #000;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;

  &::placeholder {
    font-size: 25px; // Changer la taille ici
  }

  &::-webkit-input-placeholder {
    font-size: 25px;
  }

  &::-moz-placeholder {
    font-size: 25px;
  }

  &:-ms-input-placeholder {
    font-size: 25px;
  }
`;

    const pictures = [
        {
          picture: CDG,
          id: 0,
        },
        {
          picture: POLE,
          id: 1,
        },
        {
          picture: CAP,
          id: 2,
        },
        {
          picture: CAF,
          id: 3,
        },
        {
          picture: MILE,
          id: 4,
        },
      ];
  return (
    <div className='homepage2'>
        <figure className='homepage2__figure'>
            <img src={Insertion} alt="Hero" className='homepage2__figure-banniere'/>
            {/* <Caroussel pictures={pictures} /> */}
        </figure>
        <div className='homepage2__consortium'>
            <p className='homepage2__consortium-text'>Consortium</p>
            <ul className='homepage2__consortium-list'>
                <li>
                <a href='https://www.cg971.fr/' target="_blank" rel="noopener noreferrer">
                    <img src={CDG} alt="cdg" className='homepage2__consortium-list-image' />
                </a>
                </li>
                <li>
                  <a href='https://www.pole-emploi.fr/accueil/'>
                    <img src={POLE} alt="pole" className='homepage2__consortium-list-image' />
                  </a>
                </li>
                <li>
                  <a href='https://www.capemploi-971.com/'>
                    <img src={CAP} alt="cap" className='homepage2__consortium-list-image' />
                  </a>
                </li>
                <li>
                  <a href="https://www.caf.fr/">
                    <img src={CAF} alt="caf" className='homepage2__consortium-list-image' />
                  </a>
                </li>
                <li>
                  <a href="https://missionlocaleguadeloupe.fr/">
                    <img src={MILE} alt="mission locale" className='homepage2__consortium-list-image' />
                  </a>
                </li>
            </ul>
        </div>
        <div style={{ padding: '0 4em'}} >
        <SearchWrapper>
          <SearchIcon>
            <img src={Search} alt="search" />
          </SearchIcon>
          <SearchInput type="text" placeholder="Que rechercher vous ?" />
          <SubmitIcon>
            <img src={Valide} alt="submit" />
          </SubmitIcon>
        </SearchWrapper>
        <article className='homepage2__article'>
          <div className='homepage2__article-group'>
            <div className='homepage2__article-group-text'>
              <h1 className='homepage2__article-group-text-title'>Service Public de l’Insertion et de l’Emploi</h1>
              <p className='homepage2__article-group-text-paragraph'>
              Bienvenue sur le site du Service Public d'Insertion et de l'Emploi (SPIE). Notre mission est de faciliter votre accès ou retour à l'emploi grâce à un accompagnement personnalisé.<br/>
              Le SPIE est votre allié pour surmonter les obstacles à l'emploi et construire un parcours d'insertion adapté à vos besoins.<br/> Que vous soyez en situation de précarité ou en recherche active d'emploi, nous sommes là pour vous aider.<br/>
              Ensemble, construisons votre avenir professionnel.
              </p>
            </div>
            <Carousel pictures={pictures} />
          </div>
        </article>
        <article className='homepage2__article2'>
          <h2 className='homepage2__article2'><span className='homepage2__article2-debut'>L'actu</span> de mon département</h2>
          <div className='homepage2__article2-group'>
            <div className='homepage2__article2-group-card'>
              <ImageBorder imageUrl={CAF} title="Mes démarches" subtitle='Aides' />
              <ImageBorder imageUrl={CAP} title="L'emploi chez les handicapés" subtitle='Handicap' />
              <ImageBorder imageUrl={CDG} title="Insertion par l'emploi" subtitle='Insertion' />
              <ImageBorder imageUrl={MILE} title="La rentré de l'emploi" subtitle='Formation' />
            </div>
            <aside className='homepage2__article2-group-reseaux'>
              <div className='homepage2__article2-group-reseaux-info'>
                <h3 className='homepage2__article2-group-reseaux-info-titre'>Info pratique</h3>
                <div className='homepage2__article2-group-reseaux-info-pratique'>
                  <ul className='homepage2__article2-group-reseaux-info-pratique-group'>
                    <li className='homepage2__article2-group-reseaux-info-pratique-group-icon'>
                      <img src={Localisation} alt="Localisation" />
                      <p className='homepage2__article2-group-reseaux-info-pratique-group-icon-title'>Les lieux d'accueil</p>
                    </li>
                    <li className='homepage2__article2-group-reseaux-info-pratique-group-icon'>
                      <img src={Emploi} alt="emploi" />
                      <p className='homepage2__article2-group-reseaux-info-pratique-group-icon-title'>Offre d'emploi</p>
                    </li>
                    <li className='homepage2__article2-group-reseaux-info-pratique-group-icon'>
                      <img src={Aide} alt="aides" />
                      <p className='homepage2__article2-group-reseaux-info-pratique-group-icon-title'>Les aides</p>
                    </li>
                    <li className='homepage2__article2-group-reseaux-info-pratique-group-icon'>
                      <img src={Contacts} alt="contacts" />
                      <p className='homepage2__article2-group-reseaux-info-pratique-group-icon-title'>Contact</p>
                    </li>
                    <li className='homepage2__article2-group-reseaux-info-pratique-group-icon'>
                      <img src={RendezVous} alt="rendez-vous" />
                      <p className='homepage2__article2-group-reseaux-info-pratique-group-icon-title'>Rendez-vous</p>
                    </li>
                    {/* <li>
                      <img src={} alt="" />
                    </li>  */}
                  </ul>
                </div>
              </div>
              <div className='homepage2__article2-group-reseaux-sociaux'>
                <p className='homepage2__article2-group-reseaux-sociaux-titre'>Suivez nous</p>
                <ul className='homepage2__article2-group-reseaux-sociaux-logo'>
                  <li className='homepage2__article2-group-reseaux-sociaux-logo-social'>
                    <img src={Twitter} alt="social" className='homepage2__article2-group-reseaux-sociaux-logo-social-media'/>
                  </li>
                  <li className='homepage2__article2-group-reseaux-sociaux-logo-social'>
                    <img src={Facebook} alt="social" className='homepage2__article2-group-reseaux-sociaux-logo-social-media'/>
                  </li>
                  <li className='homepage2__article2-group-reseaux-sociaux-logo-social'>
                    <img src={Instagram} alt="social" className='homepage2__article2-group-reseaux-sociaux-logo-social-media'/>
                  </li>
                  <li className='homepage2__article2-group-reseaux-sociaux-logo-social'>
                    <img src={Youtube} alt="social" className='homepage2__article2-group-reseaux-sociaux-logo-social-media'/>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </article>
        <div className='homepage2__other'>
        <h2 className='homepage2__other-title'>Agenda</h2>
          <Agenda/>
        </div>
        {/* <div className='homepage2__partner'>
            <Partner picture={POLE} title="Offre d'emploi" author="Demandeur d'emploi"/>
            <Partner picture={CAP} title="Aide au parcours vers l'emploi" author="Personnes handicapés"/>
            <Partner picture={CAF} title="Revenu de solidarité active (RSA)" author="BRSA"/>
            <Partner picture={CDG} title="Mdph" author="par Bertrand"/>
        </div> */}
        </div>
    </div>
  )
}

export default Homepage2