/* useIsMount.js */

import { useEffect, useRef } from 'react'

function useIsFirstRender() {
  // Indicates when a component is in its first render

  const isFirstRenderRef = useRef(true)

  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])

  return isFirstRenderRef.current
}

export default useIsFirstRender
