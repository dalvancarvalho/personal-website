/* App.jsx */

import { Suspense } from 'react'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import useTheme from './context/ThemeContext'
import Routes from './routes'
import Loading from './pages/Loading'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'

gsap.registerPlugin(ScrollTrigger, TextPlugin) // GSAP animation plugins

function App() {
  // Main application
  // Note: The 'Suspense' component was added to prevent the header
  // animation from firing before the hero section is loaded

  const DARK = '#1a1a1a' // dark gray
  const LIGHT = '#f8fafc' // light slate
  const { pathname } = useLocation()
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
        {pathname !== '/404' && <Footer />}
      </Suspense>
    </>
  )
}

export default App
