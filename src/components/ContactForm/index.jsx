/* ContactForm/index.jsx */

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useContactForm from './hooks/useContactForm'
import useContactFormAnimation from './animations/useContactFormAnimation'
import CallToAction from '../Button/CallToAction'
import Spinner from '../Button/Spinner'
import Input from './components/Input'
import Message from './components/Message'
import TextArea from './components/TextArea'

function ContactForm({ t }) {
  // Contact form

  const { handleSubmit, inputs, isSubmitting, message, setInputs } = useContactForm()
  const formRef = useContactFormAnimation()

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
        inputs={inputs}
        label={t('pages.home.contact.label.name')}
        setInputs={setInputs}
        type="text"
      />
      <Input
        inputName="email"
        inputs={inputs}
        label={t('pages.home.contact.label.email')}
        setInputs={setInputs}
        type="email"
      />
      <TextArea
        inputName="message"
        inputs={inputs}
        label={t('pages.home.contact.label.message')}
        setInputs={setInputs}
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
      <Message message={message} />
    </form>
  )
}

export default ContactForm
