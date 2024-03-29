/* App.jsx */

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { TextPlugin } from 'gsap/TextPlugin'

import useTheme from './context/ThemeContext'
import useConsoleMessage from './hooks/useConsoleMessage'

import Header from './layout/Header'
import Main from './layout/Main'

import Routes from './routes'

function App() {
  // Main application

  const DARK = '#1a1a1a' // dark gray
  const LIGHT = '#f8fafc' // light slate
  
  const { theme } = useTheme()
  useConsoleMessage()

  useEffect(() => {
    // GSAP plugins

    if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, TextPlugin)
  }, [])

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme === 'light' ? LIGHT : DARK} />
      </Helmet>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
