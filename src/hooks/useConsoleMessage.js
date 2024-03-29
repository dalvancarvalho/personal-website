/* useConsoleMessage.js */

import { useEffect } from 'react'

function useConsoleMessage() {
  // Welcome message displayed inside dev tools

  const string =
    '%cHello fellow dev, welcome to my personal website! \nFeel free to check its repository at: https://github.com/dalvancarvalho/personal-website'

  const style = [
    'color: #5a82db',
    'font-weight: bold',
    'font-family: monospace',
    'font-size: 12px',
  ].join('; ')

  useEffect(() => console.log(string, style), [])
}

export default useConsoleMessage
