/* Logo.jsx */

import { Link } from 'react-router-dom'
import useMenu from '../../../context/MenuContext'
import useLogoAnimation from '../animations/useLogoAnimation'

function Logo({ y }) {
  // Animated logo that changes its text based in the current language and pathname

  const { cursorRef, textRef } = useLogoAnimation()
  const { isMenuOpen } = useMenu()

  return (
    <Link
      className={`font-bold font-mark-pro tracking-tight transition-[font] duration-300
      ${y === 0 || isMenuOpen ? 'text-2xl 2xl:text-3xl' : 'text-xl 2xl:text-2xl'}`}
      to="/"
    >
      <span className="text-accent color-transition" ref={textRef}></span>
      <span className="font-urbanist opacity-0" ref={cursorRef}>
        _
      </span>
    </Link>
  )
}

export default Logo
