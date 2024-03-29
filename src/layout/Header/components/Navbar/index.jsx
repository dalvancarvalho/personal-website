/* Navbar/index.jsx */

import NavLink from '../NavLink'

import navLinks from '../../constants/navLinks'

function Navbar(props) {
  // List of navigation links displayed in the header

  const { pathname, t } = props

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
