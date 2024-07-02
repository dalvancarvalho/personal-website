/* useToast.jsx */

import { toast } from 'sonner'

import { Toast } from '..'

import { TOAST_VARIANTS } from '../constants/toastVariants'

export function useToast(variant) {
  // Handles the logic of the 'Toast' component

  const toastProps = TOAST_VARIANTS[variant]

  function createToast(variant) {
    toast.custom((id) => <Toast id={id} variant={variant} />)
  }

  function removeToast(id) {
    toast.dismiss(id)
  }

  return { createToast, removeToast, toastProps }
}
