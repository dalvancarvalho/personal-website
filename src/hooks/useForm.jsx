/* useForm.jsx */

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import useConfetti from '../contexts/ConfettiContext'

function useForm() {
  // Handles the functionality of the contact form

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
  const { setConfetti } = useConfetti()

  useEffect(() => {
    // Fades out the message after 5 seconds

    const timer = setTimeout(() => {
      setMessage({ ...message, active: false })
    }, 5000)

    return () => clearTimeout(timer)
  }, [message.active])

  function handleSubmit(event) {
    // Handles the data of the form when the submit button is pressed

    event.preventDefault()

    const inputFields = Object.values(inputs)
    const message = inputFields[2]
    const isFormComplete = inputFields.every((input) => input !== '')
    const isMessageShort = message.length < 50

    if (isFormComplete && !isMessageShort) {
      sendEmail()
    } else if (isFormComplete && isMessageShort) {
      // ⚠️ Displays a message saying that the 'message' field should have at least 50 characters
      setMessage({ active: true, status: 'short' })
    } else {
      // ⚠️ Displays a message saying that all the fields should be filled
      setMessage({ active: true, status: 'incomplete' })
    }
  }

  async function sendEmail() {
    // Sends an e-mail with the submitted data

    // Environment variables
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID

    let response

    setIsSubmitting(true)
    setMessage({ ...message, active: false })

    try {
      response = await emailjs.send(serviceID, templateID, inputs, publicKey)
    } catch (err) {
      console.error(err)
    } finally {
      if (!response || response.status !== 200) {
        // ❌ Displays an error message
        setMessage({ active: true, status: 'error' })
      } else {
        // ✔️ Displays a success message
        setMessage({ active: true, status: 'success' })
        // 🎊 Confetti!
        setConfetti(true)
        // Resets all the inputs
        setInputs({ name: '', email: '', message: '' })
      }

      setIsSubmitting(false)
    }
  }

  return { formRef, handleSubmit, inputs, isSubmitting, message, setInputs }
}

export default useForm
