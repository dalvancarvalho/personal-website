/* Logo.jsx */

import { useNavigate } from 'react-router-dom'
import useMenu from '../../../context/MenuContext'
import useLogoAnimation from '../animations/useLogoAnimation'

function Logo(props) {
  // Animated logo that changes its text based on the current language and pathname

  const { y } = props
  const { isMenuOpen } = useMenu()
  const refs = useLogoAnimation()
  const navigate = useNavigate()

  return (
    <p
      className={`font-bold font-mark-pro tracking-tight transition-[font] duration-300
      ${y === 0 || isMenuOpen ? 'text-2xl 2xl:text-3xl' : 'text-xl 2xl:text-2xl'}
      cursor-pointer group`}
      onClick={() => navigate('/')}
      tabIndex="0"
    >
      <span
        className="text-accent group-hover:text-blue-500 group-hover:dark:text-orange-400
        group-focus-visible:text-blue-500 group-focus-visible:dark:text-orange-400 
        color-transition"
        ref={refs.text}
      ></span>
      <span className="font-urbanist opacity-0" ref={refs.cursor}>
        _
      </span>
    </p>
  )
}

export default Logo
