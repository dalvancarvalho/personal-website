/* Header/index.jsx */

import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useMenu from '../../context/MenuContext'
import useDocCoordinates from '../../hooks/useDocCoordinates'
import useScreenProps from '../../hooks/useScreenProps'
import useHeaderAnimation from './animations/useHeaderAnimation'
import Container from '../Container'
import SkipToContent from '../../components/Button/SkipToContent'
import LanguageSwitch from './components/LanguageSwitch'
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
  const refs = useHeaderAnimation(pathname)

  return (
    <header
      className={`${
        y === 0 || isMenuOpen
          ? 'h-20 md:h-24 2xl:h-28 bg-transparent border-b-transparent'
          : 'h-12 2xl:h-16 bg-slate-50 dark:bg-dark-1 backdrop-blur-[8px] border-b-slate-200 dark:border-b-dark-5' // should stay in one line :(
      }
      fixed top-0 z-50 w-full 2xl:text-lg bg-opacity-[85%] dark:bg-opacity-[85%]
      border-b transition-[height,background,border] duration-300`}
      ref={refs.scope}
    >
      <SkipToContent t={t} />
      <Container
        className={`${pathname !== '/404' ? 'justify-between' : 'justify-end'}
        px-6 md:px-8 h-full flex items-center`}
      >
        {pathname !== '/404' && <Logo y={y} />}
        <div ref={refs.nav}>
          {screenSize.md ? (
            // 💻 on medium/large screens, renders the items directly in the header
            <div className="flex items-center gap-6 2xl:gap-8">
              <Navbar t={t} />
              {pathname !== '/404' && (
                <span className="h-[2em] w-px bg-slate-200 dark:bg-dark-5 color-transition" />
              )}
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
