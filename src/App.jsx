/* App.jsx */

import { Suspense } from 'react'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import useTheme from './context/ThemeContext'
import Routes from './routes'
import Loading from './pages/Loading'
import Header from './layout/Header'
import Main from './layout/Main'

gsap.registerPlugin(ScrollTrigger, TextPlugin) // GSAP animation plugins

function App() {
  // Main application
  // Note: The 'Suspense' component was added to prevent the header
  // animation from firing before the hero section is loaded

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
          <Routes />
        </Main>
      </Suspense>
    </>
  )
}

export default App
