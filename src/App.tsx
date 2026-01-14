import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    console.log('✅ App component mounted')
    
    // Hide loading screen
    const loading = document.getElementById('loading')
    if (loading) {
      loading.classList.add('hidden')
    }
  }, [])

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50">
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
