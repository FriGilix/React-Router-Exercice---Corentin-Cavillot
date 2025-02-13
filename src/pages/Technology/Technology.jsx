import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Technology.css'
import rocketImage from "../../assets/img/image-launch-vehicle-portrait.jpg"
import milleniumImage from "../../assets/img/Millennium_Falcon.jpg"
import starfighter from "../../assets/img/Starfighter.jpg"


export default function Technology() {
  const [activeIndex, setActiveIndex] = useState(0)
  const technologies =[
    {
      title: "Launch Vehicle",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: rocketImage,
    },
    {
      title: "Faulcon Millenium",
      description:"It's the ship that made the Kessel Run in less than twelve parsecs. I've outrun Imperial starships. Not the local bulk cruisers, mind you, I'm talking about the big Corellian ships now. She's fast enough for you, old man.",
      image: milleniumImage,
    },
    {
      title: "Starfighter",
      description: "A starfighter, also referred to as a fighter, was a small and maneuverable spacecraft designed for combat in the atmosphere or space. Certain models of bombers, gunships, transports, light freighters, shuttles, trainers, and atmospheric fighters could be considered starfighters as well, and often fulfilled many of the same functions.",
      image: starfighter,
    }
  ]
  return (
    <div className='tech-container'>
      <Navbar/>
      <h2 className='section-title'>
        <span className='tech-number'>03 </span>SPACE LAUNCH 101
      </h2>

      <div className='tech-content'>
        <div className='tech-points'>
          {technologies.map((_, index) => (
            <button
              key={index}
              className={`tech-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

          <div className='tech-text'>
            <p className='tech-subtitle'>THE TERMINOLOGY...</p>
            <h1 className='tech-title'>{technologies[activeIndex].title}</h1>
            <p className='tech-description'>{technologies[activeIndex].description}</p>
          </div>

          <div className='tech-image'>
            <img src={technologies[activeIndex].image} alt={technologies[activeIndex].name} />
          </div>
      </div>
    </div>
  )
}
