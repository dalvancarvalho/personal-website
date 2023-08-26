/* snippets.js */

// prettier-ignore
const snippetModel = {
  // Snippet model that should be followed for all new snippets added to this file

  title: 'misc.codeSnippet.title',  // [string] should be a key to a i18next translation file
  extension: 'jsx',                 // [string] displayed inside the code snippet box
  language: 'js',                   // [string] allowed languages: css, html, js
  codeString:                       // [string] shouldn't contain any spaces at the beggining
  `/* ScrollToTop.jsx */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop({ children }) {
  // Scrolls the window to its initial coordinates whenever the pathname is changed

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return <>{children}</>
}

export default ScrollToTop
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

const personalPage = {
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

export { snippetModel as default, brGeo, personalPage, splitIt }
