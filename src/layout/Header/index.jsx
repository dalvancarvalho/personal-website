/* Header/index.jsx */

import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useMenu from '../../context/MenuContext'
import useDocCoordinates from '../../hooks/useDocCoordinates'
import useScreenProps from '../../hooks/useScreenProps'
import useAnimation from './animations/Header/useAnimation'

import Container from '../Container'
import SkipToContent from '../../components/Button/SkipToContent'
import LanguageSwitch from './components/LanguageSwitch'
import Divider from './components/Divider'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import ThemeSwitch from './components/ThemeSwitch'

function Header() {
  // Page header

  const { pathname } = useLocation()
  const { isMenuOpen } = useMenu()
  const { screenSize } = useScreenProps()
  const { y } = useDocCoordinates()
  const { t } = useTranslation()
  const refs = useAnimation(pathname)

  return (
    <header
      className={`fixed top-0 z-50 w-full 2xl:text-lg bg-opacity-[85%] dark:bg-opacity-[85%] border-b transition-[height,background,border] duration-300 ${
        y === 0 || isMenuOpen ? 'header-full' : 'header-collapsed'
      }`}
      ref={refs.scope}
    >
      <SkipToContent t={t} />
      <Container
        className={`px-6 md:px-8 h-full flex items-center ${
          pathname !== '/404' ? 'justify-between' : 'justify-end'
        }`}
      >
        {pathname !== '/404' && <Logo y={y} />}
        <div ref={refs.nav}>
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
