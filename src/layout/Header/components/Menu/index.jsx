/* Menu/index.jsx */

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useMenu } from '../../../../context/MenuContext'
import { useAnimate } from './animations/useAnimate'

import { Container } from '../../../Container'

import { Button } from '../../../../components/Button'
import { LanguageList } from '../LanguageList'
import { NavList } from '../NavList'
import { ThemeList } from '../ThemeList'

export function Menu({ pathname, t, y }) {
  // Menu displayed in small screens

  const { isMenuOpen, setMenuState, ...refs } = useMenu()
  const animation = useAnimate(refs.menu, isMenuOpen)

  return (
    <div className="grid place-items-center" ref={animation.scope}>
      <Button
        ariaLabel={t('header.nav.ariaLabel')}
        callback={() => setMenuState((current) => !current)}
        className={`!transition-all ${y === 0 || isMenuOpen ? 'scale-[1.4]' : null}`}
        ref={refs.button}
      >
        <div className="overflow-hidden">
          <div
            className={`size-6 flex flex-col justify-center text-slate-900 dark:text-gray-200 transition-transform ease-elastic-out duration-500 ${
              isMenuOpen ? '-translate-y-1/2' : 'translate-y-1/2'
            }`}
          >
            <FontAwesomeIcon className="size-full color-transition" icon={faBars} />
            <FontAwesomeIcon className="size-full color-transition" icon={faXmark} />
          </div>
        </div>
      </Button>
      <div
        className={`-z-10 absolute inset-0 w-dvw h-dvh bg-white dark:bg-black bg-opacity-85 dark:bg-opacity-85 backdrop-blur-[8px] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Container className="p-0 h-full">
          <div
            className="pt-4 w-4/6 h-full min-h-[680px] flex flex-col justify-center gap-3 font-mark-pro tracking-tight"
            ref={refs.menu}
          >
            {pathname !== '/404' && <NavList pathname={pathname} t={t} />}
            <LanguageList t={t} />
            <ThemeList t={t} />
          </div>
        </Container>
      </div>
    </div>
  )
}
