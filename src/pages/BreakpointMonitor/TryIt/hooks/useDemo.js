/* useDemo.js */

import { useState } from 'react'

export function useDemo() {
  //

  const [active, setActive] = useState(false)
  const [position, setPosition] = useState('bottom-right')
  const [transparency, setTransparency] = useState(true)

  function handleActive(event) {
    setActive(event.target.value)
  }

  function handlePosition(event) {
    const option = event.target.value

    // if (option === 'bottom-right')
    setPosition(option)
  }

  function handleTransparency(event) {
    setTransparency(event.target.value)
  }

  return {
    active,
    handleActive,
    position,
    handlePosition,
    transparency,
    handleTransparency,
  }
}
