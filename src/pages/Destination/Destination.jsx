import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Destination.css'
import moonImage from "../../assets/img/destination/moon.png"
import marsImage from "../../assets/img/destination/mars.png"
import europaImage from "../../assets/img/destination/europa.png"
import titanImage from "../../assets/img/destination/titan.png"

export default function Destination() {

  const [activeIndex, setActiveIndex] = useState(0)

  const destinations = [
    {
      name: "MOON",
      description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      travelTime: "3 DAYS",
      image: moonImage,
    },
    {
      name: "MARS",
      description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest.",
      travelTime: "9 MONTHS",
      image: marsImage,
    },
    {
      name: "EUROPA",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      travelTime: "3 YEARS",
      image: europaImage,
    },
    {
      name: "TITAN",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      travelTime: "7 YEARS",
      image: titanImage,
    }
  ]
  return (
    <div className='destination-container'>
      <Navbar/>
      <h2 className='destination-title'>
        <span className='number-destination'>01</span> PICK YOUR DESTINATION
      </h2>

      <div className='destination-content'>
        <div className='destination-image'>
          <img src={destinations[activeIndex].image} alt={destinations[activeIndex].name} />
        </div>

        <div className='destination-text'>
          <div className='destination-points'>
            {destinations.map((destination, index) => (
              <button
                key={index}
                className={`destination-tab ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}           
              >
                {destination.name}
              </button>
            ))}
          </div>

            <h1 className='destination-name'>{destinations[activeIndex].name}</h1>
            <p className='destination-description'>{destinations[activeIndex].description}</p>

            <hr className='GOAT-HR' />
            <p className='destination time'>
              <span className='time-text'>EST. TRAVEL TIME</span>
              <br />
              {destinations[activeIndex].travelTime}
            </p>
        </div>
      </div>
    </div>
  )
}
