/* App.jsx */

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { TextPlugin } from 'gsap/TextPlugin'
import { Toaster } from 'sonner'
import { TwBreakpointMonitor } from 'tw-breakpoint-monitor'
import { useLocation } from 'react-router-dom'

import { useTheme } from './context/ThemeContext'
import { useConsoleMessage } from './hooks/useConsoleMessage'

import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { Main } from './layout/Main'

import { AppRoutes } from './routes'

// prettier-ignore
export function App() {
  // Main component

  const DARK_THEME = '#1a1a1a'  // dark gray
  const LIGHT_THEME = '#f8fafc' // light slate
  const isDevEnvironment = import.meta.env.DEV // indicates if the app is in a development environment

  const { pathname } = useLocation()
  const { theme } = useTheme()
  useConsoleMessage()

  useEffect(() => gsap.registerPlugin(ScrollTrigger, TextPlugin), []) // GSAP plugins

  return (
    <div className='min-h-dvh grid grid-rows-[auto_1fr_auto]'>
      {/* Metadata */}
      <Helmet>
        {isDevEnvironment && (
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32_dev.png"
          />
        )}
        <meta name="theme-color" content={theme === 'light' ? LIGHT_THEME : DARK_THEME} />
      </Helmet>

      {/* Presentation */}
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      {pathname !== '/404' && <Footer />}
      <Toaster className='center-toast' position='bottom-center' offset="36px" />

      {/* Vercel tools */}
      <Analytics />
      <SpeedInsights />

      {/* Dev tools */}
      <TwBreakpointMonitor position='bottom-left' />
    </div>
  )
}
