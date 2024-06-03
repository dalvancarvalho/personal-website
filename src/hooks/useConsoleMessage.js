/* useConsoleMessage.js */

import { useEffect } from 'react'

export default function useConsoleMessage() {
  // Welcome message displayed inside dev tools

  const STRING =
    '%cHello fellow dev, welcome to my personal website! \nFeel free to check its repository at: https://github.com/dalvancarvalho/personal-website'

  const STYLE = [
    'color: #5a82db',
    'font-weight: bold',
    'font-family: monospace',
    'font-size: 12px',
  ].join('; ')

  useEffect(() => console.log(STRING, STYLE), [])
}
