/* App.jsx */

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import useTheme from './context/ThemeContext'
import useConsoleMessage from './hooks/useConsoleMessage'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

import Routes from './routes'

function App() {
  // Main application

  const DARK_THEME = '#1a1a1a' // dark gray
  const LIGHT_THEME = '#f8fafc' // light slate

  const { pathname } = useLocation()
  const { theme } = useTheme()
  useConsoleMessage()

  // GSAP plugins
  useEffect(() => gsap.registerPlugin(ScrollTrigger, TextPlugin), [])

  return (
    <>
      {/* Metadata */}
      <Helmet>
        <meta name="theme-color" content={theme === 'light' ? LIGHT_THEME : DARK_THEME} />
      </Helmet>

      {/* Presentation */}
      <Header />
      <Main>
        <Routes />
      </Main>
      {pathname !== '/404' && <Footer />}

      {/* Vercel tools */}
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
