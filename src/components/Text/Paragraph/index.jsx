/* Paragraph/index.jsx */

import { forwardRef } from 'react'

import Translation from '../Translation'

import paragraphVariants from './constants/paragraphVariants'

const Paragraph = forwardRef(function Paragraph(props, ref) {
  // Paragraph with a set of 'variable' and 'fixed' font-size variants

  const {
    children,
    className = '', // any other class needed goes here
    i18nKey,
    variant = 'medium', // defaults to 'medium' variant if this prop is not passed
  } = props

  const style = paragraphVariants[variant]

  return (
    <p className={`${style} ${className}`} ref={ref}>
      {children}
      {i18nKey && <Translation>{i18nKey}</Translation>}
    </p>
  )
})

export default Paragraph
