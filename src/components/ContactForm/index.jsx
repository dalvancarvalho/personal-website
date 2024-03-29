/* ContactForm/index.jsx */

import { forwardRef } from 'react'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useContactForm from './hooks/useContactForm'

import Button from '../Button'
import Spinner from '../Button/components/Spinner'
import Input from './components/Input'
import TextArea from './components/TextArea'

const ContactForm = forwardRef(function ContactForm(props, ref) {
  // Contact form

  const { t } = props

  const { handleSubmit, isSubmitting, ...inputs } = useContactForm()

  return (
    <form
      className="relative m-auto max-w-md flex flex-col items-center gap-6"
      onSubmit={handleSubmit}
      ref={ref}
    >
      <h3 className="w-full text-base md:text-lg 2xl:text-xl text-slate-800 dark:text-gray-200 font-bold color-transition">
        {t('pages.home.contact.form.title')}
      </h3>
      <Input
        inputName="name"
        label={t('pages.home.contact.form.label.name')}
        type="text"
        {...inputs}
      />
      <Input
        inputName="email"
        label={t('pages.home.contact.form.label.email')}
        type="email"
        {...inputs}
      />
      <TextArea
        inputName="message"
        label={t('pages.home.contact.form.label.message')}
        {...inputs}
      />
      <Button
        type="submit"
        tabIndex={isSubmitting ? '-1' : '0'}
        variant={isSubmitting ? 'submitting-w-full' : 'primary-w-full'}
      >
        {isSubmitting ? (
          // Shows a loading spinner if the message is being submitted
          <>
            {t('pages.home.contact.form.button.submitting')}
            <Spinner />
          </>
        ) : (
          <>
            {t('pages.home.contact.form.button.default')}
            <div className="absolute flex items-center gap-1 opacity-0 group-focus-visible/button:opacity-100 fa-envelope-hover group-focus-visible/button:translate-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon className="text-[0.6rem]" icon={faArrowRight} />
            </div>
          </>
        )}
      </Button>
    </form>
  )
})

export default ContactForm
