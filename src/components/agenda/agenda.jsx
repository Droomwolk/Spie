import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactImageMagnify from 'react-image-magnify';

import Seminaire1 from '../../assets/img/Seminaire1.png';
import Seminaire2 from '../../assets/img/Seminaire2.png';
import Seminaire3 from '../../assets/img/Seminaire3.jpeg';
import Seminaire4 from '../../assets/img/Seminaire4.png';
import Affiche from '../../assets/img/Affiche.png';
import Bik from '../../assets/img/Bik.jpeg';
import Clause from '../../assets/img/Clause.jpg';

const Card = ({ date, month, image, title }) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '20em', height: '20em', overflow: 'hidden', borderRadius: '20px', background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
    <div className="header" style={{ padding: '10px' }}>
      <h2>{date}</h2>
      <h2>{month}</h2>
    </div>
    <img
      src={image}
      alt="Card"
      className="card-image"
      style={{
        transition: 'all 0.3s ease-in-out',
        width: '100%',
        height: '60%',
        objectFit: 'contain'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = ''}
    />
    <div className="footer" style={{ flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h3>{title}</h3>
    </div>
  </div>
)

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CardsCarousel = ({ cardsData }) => (
  <Carousel responsive={responsive}>
    {cardsData.map((cardData, index) => (
      <Card key={index} {...cardData} />
    ))}
  </Carousel>
)

export default function Agenda() {
  const cardsData = [
    {
      date: '23',
      month: 'Mai',
      image: Seminaire1,
      title: 'Séminaire Insertion social',
    },
    {
        date: '01',
        month: 'Juin',
        image: Clause,
        title: 'Séminaire Insertion social',
      },
      {
        date: '06',
        month: 'Juin',
        image: Affiche,
        title: 'Séminaire Lancement SPIE',
      },
      {
        date: '10',
        month: 'Juin',
        image: Bik,
        title: 'BikAJob à Marie-Galante',
      },
      {
        date: '14',
        month: 'Juin',
        image: Seminaire4,
        title: 'Séminaire MDPH',
      },
      {
        date: '28',
        month: 'Juin',
        image: Seminaire2,
        title: "Séminaire Politique de l'emploi",
      },
      {
        date: '02',
        month: 'Juillet',
        image: 'image1.jpg',
        title: "Mois de l'insertion",
      },
    // ...
    // Add your other cards data here
  ];

  return (
    <div className="Agenda">
      <CardsCarousel cardsData={cardsData} />
    </div>
  );
}