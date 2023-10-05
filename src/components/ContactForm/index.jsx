/* ContactForm/index.jsx */

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useContactForm from './hooks/useContactForm'
import useFormAnimation from './animations/useFormAnimation'
import CallToAction from '../Button/CallToAction'
import Spinner from '../Button/Spinner'
import Input from './components/Input'
import Message from './components/Message'
import TextArea from './components/TextArea'

function ContactForm(props) {
  // Contact form

  const { t } = props
  const { handleSubmit, isSubmitting, message, ...inputs } = useContactForm()
  const formRef = useFormAnimation()

  return (
    <form
      className="relative col-start-8 col-end-13 w-full m-auto max-w-md flex flex-col
      items-center gap-6"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h3
        className="form-element contact-item w-full text-base md:text-lg 2xl:text-xl
        text-slate-800 dark:text-gray-200 font-bold color-transition"
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
        className={`${
          isSubmitting
            ? '!bg-gray-400 !dark:bg-gray-500 !text-white pointer-events-none'
            : null
        } form-element w-full`}
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
            <FontAwesomeIcon
              className="group-hover:translate-x-1 group-hover:-translate-y-1
              transition-transform group-focus-visible:translate-x-1
              group-focus-visible:-translate-y-1"
              icon={faPaperPlane}
            />
          </>
        )}
      </CallToAction>
      <Message {...message} />
    </form>
  )
}

export default ContactForm
