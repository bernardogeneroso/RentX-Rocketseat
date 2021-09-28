import { ButtonHTMLAttributes } from 'react'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  backgroundColor?: string
}

export const Button = ({
  text,
  backgroundColor,
  style,
  ...props
}: ButtonProps) => {
  const theme = useTheme()

  backgroundColor = backgroundColor || theme.colors.primary

  return (
    <Container
      style={{
        ...style,
        backgroundColor,
      }}
      {...{ backgroundColor }}
      {...props}
    >
      {text}
    </Container>
  )
}
