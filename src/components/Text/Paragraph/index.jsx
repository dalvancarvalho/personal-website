/* Paragraph/index.jsx */

import { forwardRef } from 'react'

import Translation from '../Translation'

import PARAGRAPH_VARIANTS from './constants/paragraphVariants'

// prettier-ignore
const Paragraph = forwardRef(function Paragraph({ children, className = '', ...props }, ref) {
  // Paragraph with a set of 'variable' and 'fixed' font-size variants

  const { i18nKey, variant = 'medium' } = props

  const style = PARAGRAPH_VARIANTS[variant]

  return (
    <p className={`${style} ${className}`} ref={ref}>
      {i18nKey ? <Translation>{i18nKey}</Translation> : children}
    </p>
  )
})

export default Paragraph
