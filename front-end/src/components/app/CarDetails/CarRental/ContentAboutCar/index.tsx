import React, { HTMLAttributes, ReactNode } from 'react'
import { useSpring } from 'react-spring'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface ContentAboutCarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  isActive: boolean
}

export default function ContentAboutCar({
  children,
  isActive,
  ...rest
}: ContentAboutCarProps) {
  const theme = useTheme()

  const styles = useSpring({
    borderBottom: isActive
      ? `0.2rem solid ${theme.colors.primary}`
      : `0.2rem solid ${theme.colors.white350}`,
    color: isActive ? theme.colors.grey700 : theme.colors.white400,
  })

  return (
    <Container style={styles} {...rest}>
      {children}
    </Container>
  )
}
