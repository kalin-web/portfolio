import React, { useEffect, useState } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [activeTab, setActiveTab] = useState('about')
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState('none')
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setAnimationState('changing')
      setActiveTab(tab)

      setTimeout(() => {
        setAnimationState('none')
      }, 500)
    }
  }

  return (
    <div className="app">
      <div className={animationState === 'initial' ? 'initial-animation' : ''}>
        <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} />
        
        <Hero />

        <main className="container main-content">
          <div className="content-wrapper">
            <div className={animationState === 'changing' ? 'tab-change-animation' : ''}>
              {activeTab === 'about' && <About />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'contact' && <Contact />}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App