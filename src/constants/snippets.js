/* snippets.js */

// prettier-ignore
const snippetModel = {
  // Snippet model that should be followed for all new snippets added to this file

  title: 'misc.codeSnippet.title', // [string] should be a key to a i18next translation file
  extension: 'js',                 // [string] displayed inside the code snippet box
  language: 'js',                  // [string] allowed languages: css, html, js
  codeString:                      // [string] shouldn't contain any spaces at the beginning
  `/* useCopyToClipboard.js */

import { useEffect, useState } from 'react'

function useCopyToClipboard(string) {
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

export default useCopyToClipboard
`,
}

// Each page should have its own object containing the snippets used throughout the examples
const brGeo = {
  snippetOne: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetTwo: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetThree: {
    title: '',
    extension: '',
    codeString: '',
  },
}

const personalWebsite = {
  snippetOne: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetTwo: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetThree: {
    title: '',
    extension: '',
    codeString: '',
  },
}

const splitIt = {
  snippetOne: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetTwo: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetThree: {
    title: '',
    extension: '',
    codeString: '',
  },
}

export { snippetModel as default, brGeo, personalWebsite, splitIt }
