/* useForm.jsx */

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function useForm() {
  // Handles the functionality of the contact form

  // Environment variables
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const serviceID = import.meta.env.VITE_SERVICE_ID
  const templateID = import.meta.env.VITE_TEMPLATE_ID

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

    const formFields = Object.values(inputs)
    const isFormComplete = formFields.every((field) => field !== '')

    isFormComplete ? sendEmail() : setMessage({ active: true, status: 'incomplete' })
  }

  async function sendEmail() {
    // Sends an e-mail with the submitted data

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

  return { formRef, handleSubmit, inputs, isSubmitting, message, setInputs }
}

export default useForm
