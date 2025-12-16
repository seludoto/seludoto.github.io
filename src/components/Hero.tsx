import React from 'react'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-grid">
        <div>
          <h1 className="hero-title">Build. Design. Ship.</h1>
          <p className="hero-sub">I craft beautiful and performant web apps using React and TypeScript.</p>
          <p>
            <a className="btn" href="#projects">See my work</a>
          </p>
        </div>
        <div className="hero-card">
          <img src="/avatar.png" alt="Avatar" />
        </div>
      </div>
    </section>
  )
}
