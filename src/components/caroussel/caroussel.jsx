import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Caroussel = ({pictures}) => {
  return (
    <Carousel
    className="carrousel"
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    autoPlay
    >
    {pictures.map((picture) => (
      <div key={picture.id}>
        <img
          src={picture.picture}
          alt="carrousel"
          className="carrousel__img"
        />
      </div>
    ))}
  </Carousel>
  );
}

export default Caroussel