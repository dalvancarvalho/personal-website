/* NavLink/index.jsx */

import { useRef } from 'react'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as ScrollLink } from 'react-scroll'

import useMenu from '../../../../context/MenuContext'

function NavLink(props) {
  // Link to access a respective section of the page

  const { children, icon, to } = props

  const { setMenuState } = useMenu()
  const linkRef = useRef(null)

  const isActive = linkRef.current?.state.active

  return (
    <li
      className="w-full md:text-base text-slate-500 dark:text-gray-400 nav-link-hover focus-visible:md:text-slate-900 focus-visible:dark:md:dark:text-gray-200 whitespace-nowrap"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.code !== 'Enter') return
        location.href = '#' + to
        setMenuState(false)
      }}
    >
      <ScrollLink
        activeClass="!font-semibold text-slate-800 dark:text-gray-200"
        className="py-1.5 flex items-center font-medium cursor-pointer md:ml-0 md:py-0 md:font-semibold md:text-lg 2xl:text-xl color-transition"
        href={to} // SEO purposes
        onClick={() => setMenuState(false)}
        ref={linkRef}
        spy={true}
        tabIndex="-1"
        to={to}
      >
        {isActive && (
          <FontAwesomeIcon
            className="md:hidden ml-6 sm:ml-5 mr-[22px] sm:mr-[26px] text-accent color-transition"
            icon={faCaretRight}
          />
        )}
        {icon && (
          <FontAwesomeIcon
            className={`${!isActive ? 'ml-14' : null} mr-4 w-6`}
            icon={icon}
          />
        )}
        <span className="pt-1 md:pt-0">{children}</span>
      </ScrollLink>
    </li>
  )
}

export default NavLink
