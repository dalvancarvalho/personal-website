/* main.jsx */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ParallaxProvider } from 'react-scroll-parallax'
import { LanguageProvider } from './contexts/LanguageContext'
import { ConfettiProvider } from './contexts/ConfettiContext'
import { MenuProvider } from './contexts/MenuContext'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import './i18n'
import './styles/tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ParallaxProvider>
          <LanguageProvider>
            <ThemeProvider>
              <MenuProvider>
                <ConfettiProvider>
                  <App />
                </ConfettiProvider>
              </MenuProvider>
            </ThemeProvider>
          </LanguageProvider>
        </ParallaxProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
