import React, { useRef, useState, useCallback } from 'react'
import { TextInput as TextInputNative, TextInputProps } from 'react-native'

import EmailIcon from '../../assets/email.svg'
import PasswordIcon from '../../assets/password.svg'
import EyeIcon from '../../assets/eye.svg'
import EyeHideIcon from '../../assets/eyeHide.svg'

import { Container, TextInput, Content, Icon, ErrorText } from './styles'

interface InputProps extends TextInputProps {
  defaultValue: string
  placeholder: string
  error: string
  iconName: 'email' | 'password'
}

interface InputReference extends TextInputNative {
  value: string
}

export default function Input({
  iconName,
  placeholder,
  onChangeText,
  defaultValue,
  error,
  onBlur,
  ...rest
}: InputProps) {
  const inputRef = useRef<InputReference>(null)
  const [eyeSecurity, setEyeSecurity] = useState(false)

  const handleViewPassword = useCallback(() => {
    setEyeSecurity((state) => !state)
  }, [])

  return (
    <Container>
      <Icon>
        {iconName === 'email' ? (
          <EmailIcon width="24" height="24" fill="#7A7A80" />
        ) : (
          <PasswordIcon width="24" height="24" fill="#7A7A80" />
        )}
      </Icon>

      <Content>
        <TextInput
          ref={inputRef}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          onBlur={onBlur}
          placeholder={placeholder}
          autoCompleteType={iconName}
          autoCapitalize="none"
          keyboardType={
            iconName === 'email'
              ? 'email-address'
              : iconName === 'password'
              ? 'visible-password'
              : 'default'
          }
          secureTextEntry={iconName === 'password' && !eyeSecurity}
          {...rest}
        />

        {iconName === 'password' && eyeSecurity && (
          <EyeIcon
            width="24"
            height="24"
            fill="#AEAEB3"
            onPress={handleViewPassword}
          />
        )}
        {iconName === 'password' && !eyeSecurity && (
          <EyeHideIcon
            width="24"
            height="24"
            fill="#AEAEB3"
            onPress={handleViewPassword}
          />
        )}
      </Content>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  )
}
