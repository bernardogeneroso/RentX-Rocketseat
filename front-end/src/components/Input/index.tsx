import React, { useState, InputHTMLAttributes } from 'react'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { FaCar } from 'react-icons/fa'

import { Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ type = 'text', ...props }: InputProps) {
  const [password, setPassword] = useState(false)

  function handleTogglePassword() {
    setPassword((value) => !value)
  }

  return (
    <Container>
      <div className="icon">
        {type === 'email' ? (
          <FiMail size={20} />
        ) : type === 'password' ? (
          <FiLock size={20} />
        ) : (
          <FaCar size={20} />
        )}
      </div>

      <input
        type={type === 'password' ? (password ? 'text' : type) : type}
        {...props}
      />

      {type === 'password' && (
        <div className="password" onClick={handleTogglePassword}>
          {password ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </div>
      )}
    </Container>
  )
}
