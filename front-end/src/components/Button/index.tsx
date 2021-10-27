import { ButtonHTMLAttributes } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  backgroundColor?: string
  loading?: boolean
  reverse?: boolean
}

export const Button = ({
  text,
  backgroundColor,
  style,
  loading = false,
  reverse = false,
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
      {...{ backgroundColor, reverse }}
      {...props}
    >
      {loading ? <BeatLoader color={theme.colors.white} /> : text}
    </Container>
  )
}
