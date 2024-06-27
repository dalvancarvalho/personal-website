/* NavLink/index.jsx */

import { useRef } from 'react'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as ScrollLink } from 'react-scroll'

import useMenu from '../../../../context/MenuContext'

export default function NavLink({ children, icon, to }) {
  // Link to access a respective section of the page

  const { setMenuState } = useMenu()
  const linkRef = useRef(null)

  const isActive = linkRef.current?.state.active

  function keyboardHandler(event) {
    if (event.code !== 'Enter') return
    location.href = '#' + to
    setMenuState(false)
  }

  return (
    <li
      className="w-full md:text-base text-slate-500 dark:text-gray-400 whitespace-nowrap
      hover:md:text-slate-900
      hover:md:dark:text-gray-200
      focus-visible:md:text-slate-900
      focus-visible:md:dark:text-gray-200"
      tabIndex="0"
      onKeyDown={(event) => keyboardHandler(event)}
    >
      <ScrollLink
        activeClass="!font-semibold text-slate-800 dark:text-gray-200"
        className="md:ml-0 py-1.5 md:py-0 flex items-center font-medium md:font-semibold md:text-lg cursor-pointer color-transition"
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
