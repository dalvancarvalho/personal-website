/* ConfettiContext.jsx */

import { createContext, useContext, useState } from 'react'

// Context for the confetti animation
const ConfettiContext = createContext()

export function ConfettiProvider({ children }) {
  const [confetti, setConfetti] = useState(false)

  return (
    <ConfettiContext.Provider value={{ confetti, setConfetti }}>
      {children}
    </ConfettiContext.Provider>
  )
}

export default function useConfetti() {
  return useContext(ConfettiContext)
}
