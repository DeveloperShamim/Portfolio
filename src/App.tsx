import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Creative } from './components/Creative'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{ backgroundColor: '#050507', color: '#e8eaf0', minHeight: '100vh', overflowX: 'hidden' }}>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Creative />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
