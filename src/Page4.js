import React from 'react'
import './Page4.css'
import imgGroup from './images/p4group.png'

function Page4() {
  return (
    <div className='page4'>
        <div className="p4h1"><h1>One of every five people experiences <span>loneliness</span></h1></div>
        <img className='p4img' src={imgGroup} alt="" />
        <div className="p4h1"><h1>One of every five people experiences <span>loneliness</span></h1></div>

    </div>
  )
}

export default Page4