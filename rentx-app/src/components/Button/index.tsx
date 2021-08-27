import React from 'react'
import { TextProps, ActivityIndicator } from 'react-native'

import { Container, Text } from './styles'

interface ButtonProps extends TextProps {
  text: string
  disabled?: boolean
  loading?: boolean
}

export function Button({
  text,
  loading,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} activeOpacity={0.7} disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color="#df2d4b" />
      ) : (
        <Text>{text}</Text>
      )}
    </Container>
  )
}
