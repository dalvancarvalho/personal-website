/* useCodeSnippet.js */

import { useEffect, useState } from 'react'
import Prism from 'prismjs'

function useCodeSnippet(codeString) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    // Calls the Prism.js highlight functionality

    if (typeof window !== 'undefined') Prism.highlightAll()
  }, [])

  function copyToClipboard() {
    // Copies the snippet to the clipboard

    navigator.clipboard.writeText(codeString)

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return { copyToClipboard, isCopied }
}

export default useCodeSnippet
