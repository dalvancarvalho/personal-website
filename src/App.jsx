/* App.jsx */

import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useLocation } from 'react-router-dom'
import useTheme from './context/ThemeContext'
import Routes from './routes'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'

gsap.registerPlugin(ScrollTrigger, TextPlugin) // GSAP plugins

function App() {
  // Main application

  const { pathname } = useLocation()
  const { theme } = useTheme()
  const DARK = '#1a1a1a' // dark gray
  const LIGHT = '#f8fafc' // light slate

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme === 'light' ? LIGHT : DARK} />
      </Helmet>
      <Header />
      <Main>
        <Routes />
      </Main>
      {pathname !== '/404' && <Footer />}
    </>
  )
}

export default App
