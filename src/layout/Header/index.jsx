/* Header/index.jsx */

import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useMenu } from '../../context/MenuContext'
import { useDocCoordinates } from '../../hooks/useDocCoordinates'
import { useScreenProps } from '../../hooks/useScreenProps'
import { useAnimate } from './animations/useAnimate'

import { Container } from '../Container'

import { Divider } from './components/Divider'
import { LanguageSwitch } from './components/LanguageSwitch'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Navbar } from './components/Navbar'
import { SkipToContent } from './components/SkipToContent'
import { ThemeSwitch } from './components/ThemeSwitch'

export function Header() {
  // Page header

  const { pathname } = useLocation()
  const { isMenuOpen } = useMenu()
  const { screenSize } = useScreenProps()
  const { y } = useDocCoordinates()
  const { t } = useTranslation()
  const animation = useAnimate(pathname)

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-opacity-85 dark:bg-opacity-85 transition-[height,background,border] duration-300 ${
        y === 0 || isMenuOpen
          ? 'h-20 md:h-24 border-b-transparent bg-transparent'
          : 'h-14 border-b-slate-200 dark:border-b-dark-2 bg-slate-50 dark:bg-dark-6 backdrop-blur-[8px]'
      }`}
      ref={animation.scope}
    >
      <SkipToContent t={t} />
      <Container
        className={`h-full flex items-center ${
          pathname !== '/404' ? 'justify-between' : 'justify-end'
        }`}
      >
        {pathname !== '/404' && <Logo />}
        <div ref={animation.nav}>
          {screenSize.md ? (
            // 💻 in medium/large screens, it displays the items directly on the header
            <div className="flex items-center gap-6">
              <Navbar pathname={pathname} t={t} />
              {pathname !== '/404' && <Divider pathname={pathname} y={y} />}
              <LanguageSwitch t={t} />
              <ThemeSwitch t={t} />
            </div>
          ) : (
            // 📱 in small screens, it displays a menu
            <Menu pathname={pathname} t={t} y={y} />
          )}
        </div>
      </Container>
    </header>
  )
}
