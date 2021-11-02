import React from 'react'
import { useTransition } from 'react-spring'

import Toast from './Toast'
import { ToastMessages } from '../../hooks/contexts/Toast'

import { Container } from './styles'

interface ToastContainerProps {
  messages: ToastMessages[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: (message) => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  })

  return (
    <Container isVisible={messages.length !== 0 ? true : false}>
      {messagesWithTransitions((props, item) => (
        <Toast key={item.id} style={props} message={item} />
      ))}
    </Container>
  )
}

export default ToastContainer
