import React from 'react'

const Section = ({titre, image, title}) => {
  return (
    <div className='section'>
        <h3 className='section__titre'> {titre} </h3>
        <div className='section__card'>
            <img src={image} alt="image" className='section__card-image'/>
            <p className='section__card-title'> {title} </p>
        </div>

    </div>
  )
}

export default Section