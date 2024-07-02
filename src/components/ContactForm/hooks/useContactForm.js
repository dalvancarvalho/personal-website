/* useContactForm.js */

import { useState } from 'react'
import emailjs from '@emailjs/browser'

import useConfetti from '../../../context/ConfettiContext'
import { useToast } from '../../Toast/hooks/useToast'

// prettier-ignore
export function useContactForm() {
  // Handles the functionality of the contact form

  const MIN_MESSAGE_LENGTH = 50

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setConfetti } = useConfetti()
  const { createToast } = useToast()

  function handleSubmit(event) {
    // Handles the data of the form when the submit button is pressed

    event.preventDefault()

    const inputValues = Object.values(inputs)
    const message = inputValues[2]
    const isFormComplete = inputValues.every((input) => input !== '')
    const isMessageShort = message.length < MIN_MESSAGE_LENGTH

    if (isFormComplete && !isMessageShort) {
      sendEmail()
    } else if (isFormComplete && isMessageShort) {
      createToast('cf-short')      // ❕ Displays a warning message: the 'Message' field must have at least 50 characters
    } else {
      createToast('cf-incomplete') // ❕ Displays a warning message: all the fields must be filled
    }
  }

  async function sendEmail() {
    // Sends an email with the submitted data

    // Environment variables
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID

    let response

    setIsSubmitting(true)

    try {
      response = await emailjs.send(serviceId, templateId, inputs, publicKey)
    } catch (err) {
      console.error(err)
    } finally {
      if (!response || response.status !== 200) {
        createToast('cf-error')   // ❌ Displays an error message
      } else {
        createToast('cf-success') // ✔️ Displays a success message
        setConfetti(true)         // 🎊 Confetti! (because, why not?)
        setInputs({ name: '', email: '', message: '' })
      }
      setIsSubmitting(false)
    }
  }

  return { handleSubmit, inputs, isSubmitting, setInputs }
}
