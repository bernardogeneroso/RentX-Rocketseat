import React from 'react'
import { TextProps } from 'react-native'

import { Container, Text } from './styles'

interface ButtonProps extends TextProps {
  text: string
  disabled?: boolean
}

export function Button({ text, disabled = false, ...rest }: ButtonProps) {
  return (
    <Container {...rest} activeOpacity={0.7} disabled={disabled}>
      <Text>{text}</Text>
    </Container>
  )
}
