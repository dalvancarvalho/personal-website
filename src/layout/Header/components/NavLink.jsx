/* NavLink.jsx */

import { useRef } from 'react'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as ScrollLink } from 'react-scroll'
import useMenu from '../../../context/MenuContext'

function NavLink(props) {
  // Link to access a respective section of the page

  const { children, icon, pathname, to } = props
  const { setMenuState } = useMenu()
  const linkRef = useRef(null)
  const isActive = linkRef.current?.state.active

  return (
    <li
      className="w-full md:text-base text-slate-500 dark:text-gray-400
      hover:md:text-slate-900 hover:md:dark:text-gray-200 whitespace-nowrap
      focus-visible:md:text-slate-900 focus-visible:md:dark:text-gray-200"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.code !== 'Enter') return
        location.href = pathname + '#' + to
        setMenuState(false)
      }}
    >
      <ScrollLink
        activeClass="!font-bold text-slate-800 dark:text-gray-200"
        className="py-1.5 flex items-center font-medium cursor-pointer md:ml-0
        md:py-0 md:font-bold md:uppercase 2xl:text-lg color-transition"
        href={to} // SEO purposes
        onClick={() => setMenuState(false)}
        ref={linkRef}
        spy={true}
        tabIndex="-1"
        to={to}
      >
        {isActive && (
          <FontAwesomeIcon
            className="md:hidden ml-6 sm:ml-5 mr-[22px] sm:mr-[26px] text-accent
            color-transition"
            icon={faCaretRight}
          />
        )}
        {icon && (
          <FontAwesomeIcon
            className={`${!isActive ? 'ml-14' : null} mr-4 w-6`}
            icon={icon}
          />
        )}
        <span className="pt-1">{children}</span>
      </ScrollLink>
    </li>
  )
}

export default NavLink
