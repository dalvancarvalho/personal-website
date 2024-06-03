/* Translation/index.jsx */

import { Trans } from 'react-i18next'

import TRANS_COMPONENTS from './constants/transComponents'

export default function Translation({ children }) {
  // Internationalization component that renders the text based in the current language

  return <Trans components={TRANS_COMPONENTS}>{children}</Trans>
}
