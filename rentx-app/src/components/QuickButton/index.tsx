import React, { ReactNode } from 'react'

import { Container } from './styles'

interface QuickButtonProps {
  children: ReactNode
}

export function QuickButton({ children }: QuickButtonProps) {
  return <Container activeOpacity={0.7}>{children}</Container>
}
