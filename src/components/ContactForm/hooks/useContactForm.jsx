/* useContactForm.jsx */

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

import useConfetti from '../../../context/ConfettiContext'

import Toast from '../../Toast'

function useContactForm() {
  // Handles the functionality of the contact form

  const MIN_MESSAGE_LENGTH = 50

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setConfetti } = useConfetti()

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
      // ⚠️ Displays a warning message: the 'Message' field must have at least 50 characters
      toast.custom((id) => <Toast id={id} variant="cf-short" />)
    } else {
      // ⚠️ Displays a warning message: all the fields should be filled
      toast.custom((id) => <Toast id={id} variant="cf-incomplete" />)
    }
  }

  async function sendEmail() {
    // Sends an e-mail with the submitted data

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
        // ❌ Displays an error message
        toast.custom((id) => <Toast id={id} variant="cf-error" />)
      } else {
        // ✔️ Displays a success message
        toast.custom((id) => <Toast id={id} variant="cf-success" />)
        // 🎊 Confetti! (because, why not?)
        setConfetti(true)
        // Resets all the inputs
        setInputs({ name: '', email: '', message: '' })
      }
      setIsSubmitting(false)
    }
  }

  return { handleSubmit, inputs, isSubmitting, setInputs }
}

export default useContactForm
