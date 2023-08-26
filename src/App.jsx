/* App.jsx */

import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import AppRoutes from './routes'
import useTheme from './contexts/ThemeContext'
import Header from './components/Header'
import Main from './components/Main'

gsap.registerPlugin(ScrollTrigger, TextPlugin) // GSAP animation plugins

function App() {
  const { theme } = useTheme()

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme === 'light' ? '#f8fafc' : '#1a1a1a'} />
      </Helmet>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </>
  )
}

export default App
