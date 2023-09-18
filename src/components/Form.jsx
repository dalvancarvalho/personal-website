/* Form.jsx */

import { useLayoutEffect } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import useForm from '../hooks/useForm'
import ButtonSpinner from './ButtonSpinner'
import CTAButton from './CTAButton'
import Input from './Input'
import SubmissionMessage from './SubmissionMessage'
import TextArea from './TextArea'

function Form({ t }) {
  // Contact form

  const { formRef, handleSubmit, inputs, isSubmitting, message, setInputs } = useForm()

  useLayoutEffect(() => {
    // Form animation

    const ctx = gsap.context((self) => {
      const formItems = self.selector('.form-element')
      formItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
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

  return (
    <form
      className="relative lg:row-start-1 lg:row-end-4 lg:col-start-8 lg:col-end-13 w-full
      max-w-md flex flex-col items-center gap-6 self-center "
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
      <CTAButton
        className={`${
          isSubmitting
            ? 'pointer-events-none !bg-gray-400 !dark:bg-gray-500 !text-white'
            : null
        } form-element w-full`}
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
