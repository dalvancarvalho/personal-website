/* Message.jsx */

import { Trans } from 'react-i18next'

function Message({ message: { active, status } }) {
  // Feedback message displayed when user clicks the 'submit' button

  let textColor

  switch (status) {
    case 'error':
      textColor = 'text-orange-600 dark:text-orange-500'
      break

    case 'incomplete':
      textColor = 'text-rose-600 dark:text-rose-400'
      break

    case 'short':
      textColor = 'text-rose-600 dark:text-rose-400'
      break

    case 'success':
      textColor = 'text-green-600 dark:text-green-500'
      break

    default:
      textColor = 'text-rose-600 dark:text-rose-400'
  }

  return (
    <p
      className={`absolute 2xl:text-lg font-semibold text-center
      transition-[opacity,visibility] duration-300 ease-in-out ${textColor}
      ${active ? 'opacity-1 visible' : 'opacity-0 invisible'}
      ${
        status === 'error' || status === 'short' // messages with line break
          ? '-bottom-[4.5rem] 2xl:-bottom-20'
          : '-bottom-12 2xl:-bottom-[52px]'
      }`}
    >
      <Trans>pages.home.contact.message.{status}</Trans>
    </p>
  )
}

export default Message
