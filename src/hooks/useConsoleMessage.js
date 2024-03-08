/* useConsoleMessage.js */

import { useEffect } from 'react'

function useConsoleMessage() {
  // Welcome message displayed inside dev tools

  useEffect(
    () =>
      console.log(
        '%cdalvan c_',
        'color:#2563eb; font-weight: bold; font-family: sans-serif; font-size: 16px',
        '\n',
        '\nHello fellow dev, welcome to my personal website! \nFeel free to check its GitHub repository: https://github.com/dalvancarvalho/personal-website'
      ),
    []
  )
}

export default useConsoleMessage
