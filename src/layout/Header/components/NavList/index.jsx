/* NavList/index.jsx */

import NavLink from '../NavLink'
import MenuList from '../MenuList'

import navLinks from '../../constants/navLinks'

function NavList(props) {
  // List of navigation links (inside menu)

  const { pathname, t } = props

  return (
    <nav aria-label={t('header.nav.ariaLabel')} className="w-5/6">
      <MenuList title={t('header.nav.heading')}>
        {navLinks[pathname] &&
          navLinks[pathname].map((props) => (
            <NavLink key={props.name} to={props.name} {...props}>
              {t(`header.nav.${pathname}.${props.name}`)}
            </NavLink>
          ))}
      </MenuList>
    </nav>
  )
}

export default NavList
