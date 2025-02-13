import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
    <div className='home-container'>
    <Navbar/>
    <div className='home-text-content'>
      <h2 className='sous-titre'>So, you want to travel to</h2>
      <h1 className='home-titre'>SPACE</h1>
      <div className='paragraph'>
      <p>Let's face it; if you want to go to space, you might
         as well genuinely go to outer space and not hover kind of on the
         edge of it. Well sit back, and relax because we'll give you a 
         truly out of this world experience!
      </p>
      </div>
      <div className='explore-button-container'>
        <div className='explore-button'>EXPLORE</div>
      </div>
    </div>
    </div>
    </>
  )
}
