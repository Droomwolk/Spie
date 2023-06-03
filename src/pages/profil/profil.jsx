import Header from '../../components/header/header'
import AsideBar from '../../components/asideBar/asideBar'
import Caroussel from '../../components/caroussel/caroussel'
import styled from 'styled-components'
import Carte from '../../components/card/card'
import Partner from '../../components/partner/partner'

import SPIE from '../../assets/img/Spie.jpg'
import Pole from '../../assets/img/Pole.png'
import Mile from '../../assets/img/Mile.png'
import Mdph from '../../assets/img/Mdph.jpg'
import Cap from '../../assets/img/Cap.png'

import Camera from '../../assets/icon/camera.png'
import Chevron1 from '../../assets/icon/chevron1.png'
import Chevron2 from '../../assets/icon/chevron2.png'
import Portefeuille from '../../assets/icon/portefeuille.png'

const profil = () => {
    const Cardcontainer = styled.article``
    const Card = styled.div``
    const PartnerContainer = styled.div``

    const pictures = [
        {
          picture: SPIE,
          id: 0,
        },
        {
          picture: Pole,
          id: 1,
        },
        {
          picture: Mile,
          id: 2,
        },
        {
          picture: Mdph,
          id: 3,
        },
        {
          picture: Cap,
          id: 4,
        },
      ];
  return (
    <div className='profil'>
        <AsideBar/>
        <div className='profil__side'>
            {/* <Header/> */}
            <main className='profil__side-main'>
              <Cardcontainer className='profil__side-main-cardContainer'>
                <div className='profil__side-main-cardContainer-group'>
                    <div className='profil__side-main-cardContainer-group-caroussel'>
                        <Caroussel pictures={pictures} />
                    </div>
                    <Card className='profil__side-main-cardContainer-group-list'>
                        <Carte width={"14em"} border={"0.1em"} display={"flex"} flexDirection={"row"} alignItems={"center"} backgroundColor={"pink"} logo={Camera} logo1={Chevron1} title="live" subtitle="12 webinaires" />
                        <Carte width={"14em"} border={"0.1em"} display={"flex"} flexDirection={"row"} alignItems={"center"} backgroundColor={"green"} logo={Camera} logo1={Chevron1} title="Upcoming" subtitle="8 webinars" />
                        <Carte width={"14em"} border={"0.1em"} display={"flex"} flexDirection={"row"} alignItems={"center"} backgroundColor={"purple"} logo={Camera} logo1={Chevron1} title="Finished" subtitle="23 webinars" />
                    </Card>
                </div>
                <aside className='profil__side-main-cardContainer-aside'>
                  <div className='profil__side-main-cardContainer-aside-information'>
                    <img src={Portefeuille} alt="logo" />
                    <div className='profil__side-main-cardContainer-aside-information-sold'>
                      <p style={{fontWeight: "bold"}}>Premium</p>
                      <p>$ <strong style={{fontSize:"3em"}}>55</strong> / Month</p>
                    </div>
                  </div>
                  <ul className='profil__side-main-cardContainer-aside-list'>
                    <li>Champs 1</li>
                    <li>Champs 2</li>
                    <li>Champs 3</li>
                    <li>Champs 4</li>
                  </ul>
                  <p className='profil__side-main-cardContainer-aside-button'>
                    Change Plan
                  </p>
                </aside>
              </Cardcontainer>
              <div className='profil__side-main-navigation'>
                <div className='profil__side-main-navigation-text'>
                  <p style={{fontWeight:"bold", marginRight:"0.5em"}}>Continue Watching</p>
                  <p>15 lessons</p>
                </div>
                <div className='profil__side-main-navigation-picture'>
                  <img src={Chevron2} alt="direction" />
                  <img src={Chevron1} alt="direction" />
                </div>
              </div>
              <PartnerContainer className='profil__side-main-partnerContainer'>
                <Partner picture={Pole} title="Pôle emploi" author="par Cécilia"/>
                <Partner picture={Cap} title="Cap emploi" author="par Marie Custos"/>
                <Partner picture={Cap} title="Cap emploi" author="par Mme Tony"/>
                <Partner picture={Mdph} title="Mdph" author="par Bertrand"/>
              </PartnerContainer>
            </main>
        </div>
    </div>
  )
}

export default profil