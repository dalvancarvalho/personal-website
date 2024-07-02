/* useCopyToClipboard.js */

import { useEffect, useState } from 'react'

export function useCopyToClipboard(string) {
  // Copies the passed string to the clipboard

  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return

    const timeout = setTimeout(() => setIsCopied(false), 3000)

    // Timeout cleanup
    return () => clearTimeout(timeout)
  }, [isCopied])

  function copyToClipboard() {
    navigator.clipboard.writeText(string)
    setIsCopied(true)
  }

  return { copyToClipboard, isCopied }
}
