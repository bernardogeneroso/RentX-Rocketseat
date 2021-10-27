import { useContextSelector } from 'use-context-selector'
import { ToastContext, ToastContextData } from './contexts/Toast'

export default function useToast(): ToastContextData {
  const addToast = useContextSelector(ToastContext, (toast) => toast.addToast)
  const removeToast = useContextSelector(ToastContext, (toast) => toast.removeToast)

  return {
    addToast,
    removeToast,
  }
}
