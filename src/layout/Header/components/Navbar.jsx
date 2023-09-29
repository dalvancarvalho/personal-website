/* Navbar.jsx */

import { useLocation } from 'react-router-dom'
import NavLink from './NavLink'
import navLinks from '../../../constants/navLinks'

function Navbar({ t }) {
  // List of navigation links displayed in the header

  const { pathname } = useLocation()

  return (
    <nav aria-label={t('header.nav.ariaLabel')} role="navigation">
      <ul className="flex items-center gap-6 2xl:gap-8">
        {navLinks[pathname] &&
          navLinks[pathname].map(({ name }) => (
            <NavLink key={name} to={name}>
              {t(`header.nav.${pathname}.${name}`)}
            </NavLink>
          ))}
      </ul>
    </nav>
  )
}

export default Navbar
