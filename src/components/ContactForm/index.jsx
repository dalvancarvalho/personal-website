/* ContactForm/index.jsx */

import { forwardRef } from 'react'
import { faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useContactForm from './hooks/useContactForm'
import CallToAction from '../Button/CallToAction'
import Spinner from '../Button/Spinner'
import Input from './components/Input'
import Message from './components/Message'
import TextArea from './components/TextArea'

const ContactForm = forwardRef(function ContactForm(props, ref) {
  // Contact form

  const { t } = props
  const { handleSubmit, isSubmitting, message, ...inputs } = useContactForm()

  return (
    <form
      className="relative m-auto max-w-md flex flex-col items-center gap-6"
      onSubmit={handleSubmit}
      ref={ref}
    >
      <h3
        className="w-full text-base md:text-lg 2xl:text-xl text-slate-800
        dark:text-gray-200 font-bold color-transition"
      >
        {t('pages.home.contact.formTitle')}
      </h3>
      <Input
        inputName="name"
        label={t('pages.home.contact.label.name')}
        type="text"
        {...inputs}
      />
      <Input
        inputName="email"
        label={t('pages.home.contact.label.email')}
        type="email"
        {...inputs}
      />
      <TextArea
        inputName="message"
        label={t('pages.home.contact.label.message')}
        {...inputs}
      />
      <CallToAction
        className={`w-full ${
          isSubmitting
            ? '!bg-gray-400 !dark:bg-gray-500 !text-white pointer-events-none'
            : null
        }`}
        type="submit"
      >
        {isSubmitting ? (
          // Shows a loading spinner if the message is being submitted
          <>
            {t('pages.home.contact.button.submitting')}
            <Spinner />
          </>
        ) : (
          <>
            {t('pages.home.contact.button.default')}
            <div
              className="absolute flex items-center gap-2 opacity-0
              group-focus-visible/button:opacity-100 fa-envelope-hover
              group-focus-visible/button:translate-x-2"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon className="text-xs" icon={faChevronRight} />
            </div>
          </>
        )}
      </CallToAction>
      <Message {...message} />
    </form>
  )
})

export default ContactForm
