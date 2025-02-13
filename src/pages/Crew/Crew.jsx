import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Crew.css'
import pilotImage from '../../assets/img/image-douglas-hurley.webp'

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
    <div className='crew-container'>
    <Navbar/>
      <div className='crew-text'>
      <h2 className='titre'><span className='number-crew'>02 </span>MEET YOUR CREW</h2> 
          <h3 className='metier'>COMMANDER</h3>
          <h1 className='name'>DOUGLAS HURLEY</h1>
          <p className='bio'>
            Douglas Gerald Hurley is an American engineer, former
            Marine Corps pilot and former NASA astronaut. He launched
            into space for the third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div className='crew-image'>
          <img src={pilotImage} alt="Douglas Hurley" />
      </div>


    <div className="pagination">
        {[0, 1, 2, 3].map((index) => (
          <div
          key={index}
          className={`dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  </>
  );
}

