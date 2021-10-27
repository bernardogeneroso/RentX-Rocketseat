import React, { useState, InputHTMLAttributes } from 'react'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { FaCar } from 'react-icons/fa'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { Container, Content } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

export function Input({
  type = 'text',
  error,
  register,
  ...props
}: InputProps) {
  const [password, setPassword] = useState(false)

  function handleTogglePassword() {
    setPassword((value) => !value)
  }

  return (
    <Container>
      <Content>
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
          {...register(type)}
          {...props}
        />

        {type === 'password' && (
          <div className="password" onClick={handleTogglePassword}>
            {password ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </div>
        )}
      </Content>
      {error?.message && <p className="error">{error.message}</p>}
    </Container>
  )
}
