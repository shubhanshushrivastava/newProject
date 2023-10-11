import React from 'react'
import './Page5.css'
import quote from './images/quote.png'


function Page5() {
  return (
    <div className='page5'>
      <h1>Our listeners</h1>
      <div className="listboxxx">
      <div className="listContainer">
        <img className='quotep5' src={quote} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae, tenetur rerum facere odio animi repudiandae voluptates nam consectetur iste voluptatum debitis aperiam eius minima! Reiciendis maxime reprehenderit repellendus facere!</p>
      </div>
      <div className="listContainer">
        <img className='quotep5' src={quote} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae, tenetur rerum facere odio animi repudiandae voluptates nam consectetur iste voluptatum debitis aperiam eius minima! Reiciendis maxime reprehenderit repellendus facere!</p>
      </div>
      <div className="listContainer">
        <img className='quotep5' src={quote} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae, tenetur rerum facere odio animi repudiandae voluptates nam consectetur iste voluptatum debitis aperiam eius minima! Reiciendis maxime reprehenderit repellendus facere!</p>
      </div>
      </div>
    </div>
  )
}

export default Page5