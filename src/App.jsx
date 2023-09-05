/* App.jsx */

import { Suspense } from 'react'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import AppRoutes from './routes'
import useTheme from './contexts/ThemeContext'
import Header from './components/Header'
import Loading from './components/Loading'
import Main from './components/Main'

gsap.registerPlugin(ScrollTrigger, TextPlugin) // GSAP animation plugins

function App() {
  // Main application

  const DARK = '#1a1a1a' // dark gray
  const LIGHT = '#f8fafc' // light slate
  const { theme } = useTheme()

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme === 'light' ? LIGHT : DARK} />
      </Helmet>
      <Suspense fallback={<Loading />}>
        <Header />
        <Main>
          <AppRoutes />
        </Main>
      </Suspense>
    </>
  )
}

export default App
