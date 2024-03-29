/* NavList/index.jsx */

import NavLink from '../NavLink'
import MenuList from '../MenuList'

import navLinks from '../../constants/navLinks'

function NavList(props) {
  // List of navigation links (inside menu)

  const { pathname, t } = props

  return (
    <nav aria-label={t('header.nav.ariaLabel')} className="w-5/6" role="navigation">
      <MenuList title={t('header.nav.heading')}>
        {navLinks[pathname] &&
          navLinks[pathname].map(({ name, ...props }) => (
            <NavLink key={name} to={name} {...props}>
              {t(`header.nav.${pathname}.${name}`)}
            </NavLink>
          ))}
      </MenuList>
    </nav>
  )
}

export default NavList
