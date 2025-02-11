import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Destination.css'
import planetEuropa from '../../assets/img/destination/europa.png'

export default function Destination() {
  return (
    <>
    <div className='destination-container'>
    <Navbar/>
    <div className='pick-destination-text-content'>
      <h2 className='number-europa'>01</h2>
      <h2 className='pick'>Pick Your Destination</h2>
    </div>
      <div className='europa-img'>
        <img src={planetEuropa} alt="planet-europa" />
    </div>
    </div>
    </>
  )
}
