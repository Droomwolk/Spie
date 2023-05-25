import React from 'react'

const Card = ({backgroundColor, display, justifyContent, alignItems, title, subtitle, logo, logo1, width, border}) => {
  return (
    <div className='card'style={{backgroundColor}}>
        <img src={logo} alt="logo" className='card__image'/>
            <div className='card__main'>
                <p style={{fontWeight: "bold"}} >{title}</p>
                <p style={{fontSize: "0.8em"}} >{subtitle}</p>
            </div>
        <img src={logo1} alt="logo" />
    </div>
  )
}

export default Card