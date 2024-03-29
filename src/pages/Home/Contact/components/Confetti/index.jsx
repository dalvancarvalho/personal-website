/* Confetti/index.jsx */

import { useEffect } from 'react'
import ReactConfetti from 'react-confetti'

import useConfetti from '../../../../../context/ConfettiContext'
import useScreenProps from '../../../../../hooks/useScreenProps'

function Confetti() {
  // Container that wraps the confetti animation

  const { setConfetti } = useConfetti()
  const { isPortraitMode, screenDimensions, screenSize } = useScreenProps()

  // prettier-ignore
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(false)
    }, isPortraitMode ? 20000 : 10000) // the animation takes longer to complete on mobile devices

    return () => clearTimeout(timer)
  }, [])

  return (
    <ReactConfetti
      className="absolute z-50 top-0 left-0"
      confettiSource={{ x: 0, y: 0, w: screenDimensions.width }}
      height={isPortraitMode ? 4000 : 2000}
      numberOfPieces={screenSize.lg ? 700 : 350}
      recycle={false}
      width={screenDimensions.width}
    />
  )
}

export default Confetti
