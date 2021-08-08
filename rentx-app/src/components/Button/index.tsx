import React from 'react'
import { TextProps } from 'react-native'

import { Container, Text } from './styles'

interface ButtonProps extends TextProps {
  text: string
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Text>{text}</Text>
    </Container>
  )
}
