/* ConfettiContext.jsx */

import { createContext, useContext, useState } from 'react'

// Context for the confetti animation
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
  return useContext(ConfettiContext)
}

export { useConfetti as default, ConfettiProvider }
