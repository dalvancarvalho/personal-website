/* Logo/index.jsx */

import { useNavigate } from 'react-router-dom'

import useAnimate from './animations/useAnimate'

function Logo() {
  // Animated logo that changes its text based on the current language and pathname

  const animation = useAnimate()
  const navigate = useNavigate()

  function goHome(event) {
    if (event.code !== 'Enter') return
    navigate('/')
  }

  return (
    <p
      className="text-2xl font-bold font-mark-pro tracking-tight transition-[font] duration-300 cursor-pointer group"
      onClick={() => navigate('/')}
      onKeyDown={(event) => goHome(event)}
      ref={animation.scope}
      tabIndex="0"
    >
      <span
        className="text-accent group-focus-visible:text-blue-500 logo-hover group-focus-visible:dark:text-orange-400 color-transition"
        ref={animation.text}
      ></span>
      <span className="font-urbanist opacity-0" ref={animation.cursor}>
        _
      </span>
    </p>
  )
}

export default Logo
