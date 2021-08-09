import React, { useState, useCallback } from 'react'
import { FieldError } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import NameIcon from '../../assets/name.svg'
import EmailIcon from '../../assets/email.svg'
import PasswordIcon from '../../assets/password.svg'
import EyeIcon from '../../assets/eye.svg'
import EyeHideIcon from '../../assets/eyeHide.svg'

import {
  Container,
  TextInput,
  Content,
  ContentInput,
  Icon,
  ErrorText,
} from './styles'

interface InputProps extends TextInputProps {
  name: string
  defaultValue?: string
  placeholder: string
  error: FieldError | undefined
}

export default function Input({
  name,
  placeholder,
  onChangeText,
  defaultValue = '',
  error,
  ...rest
}: InputProps) {
  const [eyeSecurity, setEyeSecurity] = useState(false)

  const handleViewPassword = useCallback(() => {
    setEyeSecurity((state) => !state)
  }, [])

  return (
    <Container>
      <Content>
        <Icon>
          {name === 'email' ? (
            <EmailIcon width="24" height="24" fill="#7A7A80" />
          ) : name === 'name' ? (
            <NameIcon width="24" height="24" fill="#7A7A80" />
          ) : (
            <PasswordIcon width="24" height="24" fill="#7A7A80" />
          )}
        </Icon>

        <ContentInput>
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            autoCompleteType={name === 'email' ? 'email' : 'name'}
            autoCapitalize="none"
            keyboardType={name === 'email' ? 'email-address' : 'default'}
            secureTextEntry={
              (name === 'password' || name === 'password_confirmation') &&
              !eyeSecurity
            }
            {...rest}
          />

          {(name === 'password' || name === 'password_confirmation') &&
            !eyeSecurity && (
              <EyeIcon
                width="24"
                height="24"
                fill="#AEAEB3"
                onPress={handleViewPassword}
              />
            )}
          {(name === 'password' || name === 'password_confirmation') &&
            eyeSecurity && (
              <EyeHideIcon
                width="24"
                height="24"
                fill="#AEAEB3"
                onPress={handleViewPassword}
              />
            )}
        </ContentInput>
      </Content>

      {error && <ErrorText>{error.message}</ErrorText>}
    </Container>
  )
}
