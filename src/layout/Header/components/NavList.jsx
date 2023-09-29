/* NavList.jsx */

import { useLocation } from 'react-router-dom'
import NavLink from './NavLink'
import MenuList from './MenuList'
import navLinks from '../../../constants/navLinks'

function NavList({ t }) {
  // List of navigation links (inside menu)

  const { pathname } = useLocation()

  return (
    <nav aria-label={t('header.nav.ariaLabel')} className="w-5/6" role="navigation">
      <MenuList title={t('header.nav.heading')}>
        {navLinks[pathname] &&
          navLinks[pathname].map(({ icon, name }) => (
            <NavLink icon={icon} key={name} to={name}>
              {t(`header.nav.${pathname}.${name}`)}
            </NavLink>
          ))}
      </MenuList>
    </nav>
  )
}

export default NavList
