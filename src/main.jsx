/* main.jsx */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ParallaxProvider } from 'react-scroll-parallax'

import { ConfettiProvider } from './context/ConfettiContext'
import { LanguageProvider } from './context/LanguageContext'
import { MenuProvider } from './context/MenuContext'
import { ScreenPanelProvider } from './context/ScreenPanelContext'
import { ThemeProvider } from './context/ThemeContext'

import App from './App'

import './i18n'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScreenPanelProvider>
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
        </ScreenPanelProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
