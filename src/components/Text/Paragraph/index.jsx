/* Paragraph/index.jsx */

import { forwardRef } from 'react'

import Translation from '../Translation'

import PARAGRAPH_VARIANTS from './constants/paragraphVariants'

const Paragraph = forwardRef(function Paragraph(
  { children, className = '', i18nKey, variant = 'medium' },
  ref
) {
  // Paragraph with a set of 'variable' and 'fixed' font-size variants

  const style = PARAGRAPH_VARIANTS[variant]

  return (
    <p className={`${style} ${className}`} ref={ref}>
      {i18nKey ? <Translation>{i18nKey}</Translation> : children}
    </p>
  )
})

export default Paragraph
