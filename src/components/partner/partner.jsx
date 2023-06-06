import React from 'react'

const Partner = ({picture, title, author, objectFit}) => {
  return (
    <div className='partner'>
        <img src={picture} alt="logo" className='partner__img' style={{objectFit}}/>
        <div className='partner__group'>
            <p style={{fontSize: "1em", fontWeight: "600"}}>{title}</p>
            <p style={{color: "grey" }}>{author}</p>
            {/* <div className='partner__group-list'>
                <button className='partner__group-list-button'>Accès au dispositif</button>
            </div> */}
        </div>
    </div>
  )
}

export default Partner