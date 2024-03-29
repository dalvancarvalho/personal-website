/* Translation/index.jsx */

import { Trans } from 'react-i18next'
import transComponents from './constants/transComponents'

function Translation(props) {
  // Internationalization component that renders the text based in the current language

  return <Trans components={transComponents}>{props.children}</Trans>
}

export default Translation
