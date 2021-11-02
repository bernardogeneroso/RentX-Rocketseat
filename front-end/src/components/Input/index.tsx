import React, { useState, InputHTMLAttributes } from 'react'
import { animated, useTransition, useSpring, config } from 'react-spring'
import { IconBaseProps } from 'react-icons'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { Container, Content, ContentIcon, ContentInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  typeForm: 'name' | 'email' | 'password'
  error: FieldError | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  icon?: React.ComponentType<IconBaseProps>
}

export function Input({
  typeForm,
  type,
  error,
  register,
  placeholder,
  icon: Icon,
  ...props
}: InputProps) {
  const [isValue, setIsValue] = useState(false)
  const [password, setPassword] = useState(false)

  const transitionLabelPlaceholder = useTransition(isValue, {
    from: { opacity: 0.6, scale: 0.6, translateY: 15 },
    enter: { opacity: 1, scale: 1, translateY: 0 },
    leave: { opacity: 0, scale: 0.6, translateY: 15 },
    config: config.stiff,
  })

  const transitionErrorStyle = useTransition(!!error?.message, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const transitionPasswordStyle = useTransition(password, {
    from: { opacity: 0, rotateX: 0 },
    enter: { opacity: 1, rotateX: 360 },
    leave: { opacity: 0, rotateX: 0 },
  })

  const springInputStyle = useSpring({
    translateY: isValue ? 10 : 0,
  })

  function handleHasValue(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setIsValue(true)
    } else {
      setIsValue(false)
    }
  }

  function handleTogglePassword() {
    setPassword((value) => !value)
  }

  return (
    <Container>
      <Content>
        {Icon && (
          <ContentIcon isActive={isValue}>
            <Icon size={20} />
          </ContentIcon>
        )}

        <ContentInput>
          {transitionLabelPlaceholder(
            (styles, item) =>
              item && (
                <animated.label style={styles}>{placeholder}</animated.label>
              )
          )}

          <animated.input
            style={springInputStyle}
            type={typeForm === 'password' ? (password ? 'text' : type) : type}
            {...register(typeForm)}
            {...props}
            placeholder={placeholder}
            onChange={handleHasValue}
          />
        </ContentInput>

        {typeForm === 'password' &&
          transitionPasswordStyle((styles, item) =>
            item ? (
              <animated.div
                style={styles}
                className="password"
                onClick={handleTogglePassword}
              >
                <FiEye size={20} />
              </animated.div>
            ) : (
              <animated.div
                style={styles}
                className="password"
                onClick={handleTogglePassword}
              >
                <FiEyeOff size={20} />
              </animated.div>
            )
          )}
      </Content>

      {transitionErrorStyle(
        (styles, item) =>
          item && (
            <animated.p style={styles} className="error">
              {error?.message}
            </animated.p>
          )
      )}
    </Container>
  )
}
