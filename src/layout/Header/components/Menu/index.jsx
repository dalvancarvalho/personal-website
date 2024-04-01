/* Menu/index.jsx */

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useMenu from '../../../../context/MenuContext'
import useAnimate from './animations/useAnimate'

import Container from '../../../Container'

import Button from '../../../../components/Button'
import LanguageList from '../LanguageList'
import NavList from '../NavList'
import ThemeList from '../ThemeList'

function Menu(props) {
  // Menu displayed on small screens

  const { pathname, t, y } = props

  const { isMenuOpen, setMenuState, ...refs } = useMenu()
  const animation = useAnimate(refs, isMenuOpen)

  return (
    <div className="grid place-items-center" ref={animation.scope}>
      <Button
        ariaLabel={t('header.nav.ariaLabel')}
        callback={() => setMenuState((current) => !current)}
        className={`${y === 0 || isMenuOpen ? 'scale-[1.4]' : null} force-transition`}
      >
        <div className="overflow-hidden">
          <div
            className="size-6 -translate-y-1/2 flex flex-col items-center gap-px justify-center text-slate-900 dark:text-gray-200"
            ref={refs.button}
          >
            <FontAwesomeIcon className="size-full" icon={faXmark} />
            <FontAwesomeIcon className="w-10/12 h-full" icon={faBars} />
          </div>
        </div>
      </Button>
      <div
        className={`-z-10 absolute inset-0 h-dvh w-dvw bg-white dark:bg-black bg-opacity-85 dark:bg-opacity-85 backdrop-blur-[8px] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Container className="p-0 h-full">
          <div
            className="pt-4 w-4/6 h-full flex flex-col justify-center gap-3 font-mark-pro tracking-tight"
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

export default Menu