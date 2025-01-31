import React from 'react'
import '../../styles/Hero.css'
export const Hero:React.FC = () => {
  return (
    <section className='hero'>
      <div className="hero__title">
        <img src="./images/binnacle-logo.png" alt="binnacle-logo" width={150} height={150}/>
        <h1>Binnacle App</h1>
      </div>
        <p>For productivity</p>
    </section>
  )
}
