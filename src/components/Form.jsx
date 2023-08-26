/* ContactForm.jsx */

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import ButtonSpinner from './ButtonSpinner'
import CTAButton from './CTAButton'
import Input from './Input'
import SubmissionMessage from './SubmissionMessage'
import TextArea from './TextArea'
import emailjsConfig from '../constants/emailjsConfig'

function Form({ t }) {
  // Contact form

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [message, setMessage] = useState({
    active: false,
    status: 'incomplete',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)

  useLayoutEffect(() => {
    // Form animation

    const ctx = gsap.context((self) => {
      const formItems = self.selector('.form-element')
      formItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'bottom bottom',
            },
          }
        )
      })
    }, formRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Fades out the message after 5 seconds

    const timer = setTimeout(() => {
      setMessage({ ...message, active: false })
    }, 5000)

    return () => clearTimeout(timer)
  }, [message.active])

  function handleSubmit(event) {
    // Handles the form data when the submit button is pressed

    event.preventDefault()

    const formFields = Object.values(inputs)
    const isFormComplete = formFields.every((field) => field !== '')

    isFormComplete ? sendEmail() : setMessage({ active: true, status: 'incomplete' })
  }

  // prettier-ignore
  async function sendEmail() {
    // Sends an e-mail with the submitted data

    const { serviceID, templateID, publicKey } = emailjsConfig
    let response

    setIsSubmitting(true)
    setMessage({ ...message, active: false })

    try {

      response = await emailjs.send(serviceID, templateID, inputs, publicKey)

    } catch (err) {

      console.error(err)

    } finally {

      if (!response || response.status !== 200) {
        setMessage({ active: true, status: 'error' }) // Displays an error message
      } else {
        setMessage({ active: true, status: 'success' }) // Displays a success message
        setInputs({ name: '', email: '', message: '' }) // Resets all the inputs
      }

      setIsSubmitting(false)
    }
  }

  return (
    <form
      className="relative lg:row-start-1 lg:row-end-4 lg:col-start-8 lg:col-end-13 w-full
      max-w-md flex flex-col items-center gap-6 self-center"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h3
        className="form-element w-full text-base md:text-lg 2xl:text-xl text-slate-800
        dark:text-gray-200 font-bold color-transition"
      >
        {t('pages.home.contact.formTitle')}
      </h3>
      <Input
        label={t('pages.home.contact.label.name')}
        inputs={inputs}
        inputName="name"
        setInputs={setInputs}
        type="text"
      />
      <Input
        label={t('pages.home.contact.label.email')}
        inputs={inputs}
        inputName="email"
        setInputs={setInputs}
        type="email"
      />
      <TextArea
        label={t('pages.home.contact.label.message')}
        inputs={inputs}
        inputName="message"
        setInputs={setInputs}
      />
      <CTAButton
        className={`form-element w-full ${isSubmitting ? 'pointer-events-none' : null}`}
        type="submit"
      >
        {isSubmitting ? (
          <>
            {t('pages.home.contact.button.submitting')}
            <ButtonSpinner />
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
      </CTAButton>
      <SubmissionMessage message={message} />
    </form>
  )
}

export default Form
