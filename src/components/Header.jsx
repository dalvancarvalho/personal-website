/* Header.jsx */

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useMenu from '../contexts/MenuContext'
import useCoordinates from '../hooks/useCoordinates'
import useScreenProps from '../hooks/useScreenProps'
import Container from './Container'
import HeaderMenu from './HeaderMenu'
import LanguageSwitch from './LanguageSwitch'
import Logo from './Logo'
import Navbar from './Navbar'
import SkipToContent from './SkipToContent'
import ThemeSwitch from './ThemeSwitch'
import VDivider from './VDivider'

function Header() {
  // Page header

  const documentElement = document.documentElement
  const { pathname } = useLocation()
  const { isMenuOpen } = useMenu()
  const { screenSize } = useScreenProps()
  const { t } = useTranslation()
  const { y } = useCoordinates(documentElement)

  useLayoutEffect(() => {
    // Header animation

    gsap.fromTo(
      '.header-elements',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.75,
        delay: 3,
        ease: 'power3.in',
      }
    )
  }, [])

  return (
    <header
      className={`${
        y === 0 || isMenuOpen
          ? 'h-20 md:h-24 2xl:h-28 bg-transparent border-b-transparent'
          : 'h-12 2xl:h-16 bg-slate-50 dark:bg-dark-1 backdrop-blur-[8px] border-b-slate-200 dark:border-b-dark-5' // should stay in one line :(
      }
      fixed top-0 z-50 w-full 2xl:text-lg bg-opacity-[85%] dark:bg-opacity-[85%]
      border-b transition-[height,background,border] duration-300`}
    >
      <SkipToContent t={t} />
      <Container
        className={`${pathname !== '/404' ? 'justify-between' : 'justify-end'}
        px-6 md:px-8 h-full flex items-center`}
      >
        {pathname !== '/404' && <Logo y={y} />}
        <div className="header-elements">
          {screenSize.md ? (
            // on medium/large screens, renders the items directly in the header
            <div className="flex items-center gap-6 2xl:gap-8">
              <Navbar t={t} />
              {pathname !== '/404' && <VDivider />}
              <LanguageSwitch t={t} />
              <ThemeSwitch t={t} />
            </div>
          ) : (
            // on small screens, renders a menu
            <HeaderMenu pathname={pathname} t={t} y={y} />
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header
