import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Invitation.css'

export default function Invitation() {
  const [showLetter, setShowLetter] = useState(false)

  const loveLetter = `🌌 Mon étoile scintillante 🌌,

    Dans l'immensité infinie de l'univers, il n'existe aucun endroit aussi magique 
    que celui où je peux être avec toi. 💫 

    Pour cette Saint-Valentin, je t'invite à un voyage extraordinaire, un moment hors du temps, 
    entre les étoiles et les planètes. Imagine un dîner sous une voûte céleste illuminée, 
    bercé par la douceur cosmique de notre amour. ✨💖 

    Rejoins-moi pour une aventure stellaire, où chaque étoile racontera notre histoire. 
    Rendez-vous à notre destination secrète... 

    Avec tout mon amour,  
    🚀 Ton astronaute du cœur ❤️ `

  return (
    <div className='invitation-container'>
      <Navbar />
      
      {!showLetter ? (
        <button className='invite-button' onClick={() => setShowLetter(true)}>
          INVITE HERE
        </button>
      ) : (
        <div className='love-letter'>
          <p>{loveLetter}</p>
          <button className='close-button' onClick={() => setShowLetter(false)}>Fermer</button>
        </div> 
      )}

      <div className='invitation-text-content'>
        <h2 className='invitation-sous-titre'>You want to travel to the</h2>
        <h1 className='invitation-titre'>LOVE</h1>
        <div className='invitation-paragraph'>
          <p>
            Invite the love of your life to a dream destination. Get the moon if you have to! 
          </p>
        </div>
      </div>
    </div>
  )
}
