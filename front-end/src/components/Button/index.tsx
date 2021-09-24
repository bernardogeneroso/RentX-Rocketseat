import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return <Container {...props}>{text}</Container>
}
