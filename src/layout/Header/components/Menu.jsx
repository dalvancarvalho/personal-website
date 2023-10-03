/* Menu.jsx */

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useMenu from '../../../context/MenuContext'
import useMenuAnimation from '../animations/useMenuAnimation'
import Container from '../../Container'
import Button from '../../../components/Button'
import LanguageList from './LanguageList'
import NavList from './NavList'
import ThemeList from './ThemeList'

function Menu(props) {
  // Menu displayed on small screens

  const { pathname, t, y } = props
  const { isMenuOpen, setMenuState, buttonRef, menuRef } = useMenu()
  useMenuAnimation(buttonRef, isMenuOpen, menuRef)

  return (
    <div className="grid place-content-center">
      <Button
        className={`${y === 0 || isMenuOpen ? 'scale-[1.4]' : null}
        !transition duration-300`}
        onClick={() => setMenuState((current) => !current)}
      >
        <div className="overflow-hidden">
          <div
            className="w-6 h-6 flex flex-col items-center gap-px justify-center
            text-slate-900 dark:text-gray-200 -translate-y-1/2"
            ref={buttonRef}
          >
            <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
            <FontAwesomeIcon className="w-10/12 h-full" icon={faBars} />
          </div>
        </div>
      </Button>
      <div
        className={`${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        absolute inset-0 -z-10 h-screen w-screen bg-white dark:bg-black bg-opacity-[85%]
        dark:bg-opacity-[85%] backdrop-blur-[8px] transition-all duration-300`}
      >
        <Container className="h-full">
          <div
            className="mt-4 w-4/6 h-full flex flex-col justify-center gap-3 font-mark-pro
            tracking-tight"
            ref={menuRef}
          >
            {pathname !== '/404' && <NavList t={t} />}
            <LanguageList t={t} />
            <ThemeList t={t} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Menu
