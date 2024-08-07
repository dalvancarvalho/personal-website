/* ContactForm/index.jsx */

import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import { useContactForm } from './hooks/useContactForm'
import { useAnimate } from './animations/useAnimate'

import { Button } from '../Button'
import { Spinner } from '../Button/components/Spinner'
import { Input } from './components/Input'
import { TextArea } from './components/TextArea'

export function ContactForm() {
  // Contact form

  const { handleSubmit, isSubmitting, ...inputs } = useContactForm()
  const { t } = useTranslation()
  const animation = useAnimate()

  return (
    <form
      className="relative m-auto max-w-md flex flex-col items-center gap-6"
      onSubmit={handleSubmit}
      ref={animation.scope}
    >
      <h3 className="w-full text-base md:text-lg text-slate-800 dark:text-gray-200 font-bold color-transition">
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
        className="w-full"
        type="submit"
        tabIndex={isSubmitting ? '-1' : '0'}
        variant={isSubmitting ? 'submitting' : 'primary'}
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
            <div
              className="absolute right-6 flex items-center gap-1 opacity-0 transition-[transform,opacity] ease-elastic-out duration-300 delay-75
              group-hover/button:translate-x-2
              group-hover/button:opacity-100
              group-focus-visible/button:translate-x-2
              group-focus-visible/button:opacity-100"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon className="text-[0.6rem]" icon={faArrowRight} />
            </div>
          </>
        )}
      </Button>
    </form>
  )
}
