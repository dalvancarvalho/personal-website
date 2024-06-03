/* Navbar/index.jsx */

import NavLink from '../NavLink'

import NAV_LINKS from '../../constants/navLinks'

export default function Navbar({ pathname, t }) {
  // List of navigation links displayed in the header

  return (
    <nav aria-label={t('header.nav.ariaLabel')}>
      <ul className="flex items-center gap-6">
        {NAV_LINKS[pathname] &&
          NAV_LINKS[pathname].map(({ id, name }) => (
            <NavLink key={id} to={name}>
              {t(`header.nav.${pathname}.${name}`)}
            </NavLink>
          ))}
      </ul>
    </nav>
  )
}
