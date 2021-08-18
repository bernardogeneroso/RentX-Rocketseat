import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container } from './styles'

interface QuickButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

export function QuickButton({ children, ...rest }: QuickButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {children}
    </Container>
  )
}
