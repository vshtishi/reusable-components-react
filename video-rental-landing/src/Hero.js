import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Super efficient Video Rental Service
          </h1>
          <p>Join thousands of happy customers and rent out your favorite video
            from our extensive rental collection. Purchases are done in a matter of seconds!
          </p>
          <button className="btn">
            Start now
          </button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero