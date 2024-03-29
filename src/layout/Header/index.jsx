/* Header/index.jsx */

import { lazy } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useMenu from '../../context/MenuContext'
import useDocCoordinates from '../../hooks/useDocCoordinates'
import useScreenProps from '../../hooks/useScreenProps'
import useAnimate from './animations/useAnimate'

import Container from '../Container'

import Logo from './components/Logo'
import SkipToContent from './components/SkipToContent'

// Dynamic imports
const Divider = lazy(() => import('./components/Divider'))
const LanguageSwitch = lazy(() => import('./components/LanguageSwitch'))
const Menu = lazy(() => import('./components/Menu'))
const Navbar = lazy(() => import('./components/Navbar'))
const ThemeSwitch = lazy(() => import('./components/ThemeSwitch'))

function Header() {
  // Page header

  const { pathname } = useLocation()
  const { isMenuOpen } = useMenu()
  const { screenSize } = useScreenProps()
  const { y } = useDocCoordinates()
  const { t } = useTranslation()
  const animation = useAnimate(pathname)

  return (
    <header
      className={`fixed top-0 z-50 w-full 2xl:text-lg bg-opacity-85 dark:bg-opacity-85 border-b transition-[height,background,border] duration-300 ${
        y === 0 || isMenuOpen ? 'header-full' : 'header-collapsed'
      }`}
      ref={animation.scope}
    >
      <SkipToContent t={t} />
      <Container
        className={`h-full flex items-center ${
          pathname !== '/404' ? 'justify-between' : 'justify-end'
        }`}
      >
        {pathname !== '/404' && <Logo y={y} />}
        <div ref={animation.nav}>
          {screenSize.md ? (
            // 💻 on medium/large screens, renders the items directly in the header
            <div className="flex items-center gap-6 2xl:gap-8">
              <Navbar pathname={pathname} t={t} />
              {pathname !== '/404' && <Divider pathname={pathname} y={y} />}
              <LanguageSwitch t={t} />
              <ThemeSwitch t={t} />
            </div>
          ) : (
            // 📱 on small screens, renders a menu
            <Menu pathname={pathname} t={t} y={y} />
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header
