/* ConfettiContext.jsx */

import { createContext, useContext, useState } from 'react'

// Context for the confetti animation on form submission
const ConfettiContext = createContext()

function ConfettiProvider({ children }) {
  const [confetti, setConfetti] = useState(false)

  return (
    <ConfettiContext.Provider value={{ confetti, setConfetti }}>
      {children}
    </ConfettiContext.Provider>
  )
}

function useConfetti() {
  // Sets the theme of the page

  return useContext(ConfettiContext)
}

export { useConfetti as default, ConfettiProvider }
