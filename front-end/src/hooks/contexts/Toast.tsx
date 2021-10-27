import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { v4 } from 'uuid'

import ToastContainer from '../../components/ToastContainer'

export interface ToastMessages {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

export interface ToastContextData {
  addToast(message: Omit<ToastMessages, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessages[]>([])

  const addToast = useCallback(({ type, title, description }: Omit<ToastMessages, 'id'>) => {
    const id = v4()

    const toast = {
      id,
      type,
      title,
      description,
    }

    setMessages((state) => [...state, toast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastContext }
