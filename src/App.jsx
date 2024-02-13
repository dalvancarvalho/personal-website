/* App.jsx */

import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

import useTheme from './context/ThemeContext'

import Routes from './routes'
import Header from './layout/Header'
import Main from './layout/Main'

// GSAP plugins
if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, TextPlugin)

function App() {
  // Main application

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
    </>
  )
}

export default App
