import React, { useState, InputHTMLAttributes } from 'react'
import { FiMail, FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { FaCar } from 'react-icons/fa'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { Container, Content } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  typeForm: 'name' | 'email' | 'password'
  error: FieldError | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

// TODO: Has necessary to keep icon red when value exist, and redesign value field
export function Input({
  typeForm,
  type,
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
          {typeForm === 'email' ? (
            <FiMail size={20} />
          ) : typeForm === 'password' ? (
            <FiLock size={20} />
          ) : typeForm === 'name' ? (
            <FiUser size={20} />
          ) : (
            <FaCar size={20} />
          )}
        </div>

        <input
          type={typeForm === 'password' ? (password ? 'text' : type) : type}
          {...register(typeForm)}
          {...props}
        />

        {typeForm === 'password' && (
          <div className="password" onClick={handleTogglePassword}>
            {password ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </div>
        )}
      </Content>

      {error?.message && <p className="error">{error.message}</p>}
    </Container>
  )
}
