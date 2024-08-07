/* snippets.js */

// prettier-ignore
export const SNIPPET_MODEL = {
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
export const brGeo = {
  snippetI: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetII: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetIII: {
    title: '',
    extension: '',
    codeString: '',
  },
}

export const personalWebsite = {
  snippetI: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetII: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetIII: {
    title: '',
    extension: '',
    codeString: '',
  },
}

export const breakpointMonitor = {
  snippetI: {
    title: 'Installation', // i18next
    language: 'bash',
    extension: 'bash',
    codeString: 'npm install tw-breakpoint-monitor',
  },
  snippetII: {
    title: 'Usage',
    language: 'js',
    extension: 'jsx',
    codeString: `/* App.jsx */

import { TwBreakpointMonitor } from 'tw-breakpoint-monitor'

export default function App() {
  return (
    <>
      ...

      <TwBreakpointMonitor />
    </>
  )
}
`,
  },
  snippetIII: {
    title: 'diff',
    language: 'js',
    extension: 'jsx',
    codeString: `- import { TwBreakpointMonitor } from 'tw-breakpoint-monitor'
+ import { isDevEnvironment, TwBreakpointMonitor } from 'tw-breakpoint-monitor'

export default function App() {
  return (
    <>
      ...

      {isDevEnvironment && <TwBreakpointMonitor />}
    </>
  )
}
`,
  },
  snippetIV: {
    title: 'customization',
    language: 'js',
    extension: 'jsx',
    codeString: `// In this example, the component will be rendered in the
// bottom-left part of the screen with full opacity

export default function App() {
  return (
    <>
      ...

      <TwBreakpointMonitor position="bottom-left" transparency={false} />
    </>
  )
}
`,
  },
}

export const splitIt = {
  snippetI: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetII: {
    title: '',
    extension: '',
    codeString: '',
  },
  snippetIII: {
    title: '',
    extension: '',
    codeString: '',
  },
}
