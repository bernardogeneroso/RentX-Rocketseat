import { HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { useSpring, config } from 'react-spring'

import { Container } from './styles'

interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export default function Option({
  isActive = false,
  icon: Icon,
  ...rest
}: OptionProps) {
  const theme = useTheme()

  const optionStyle = useSpring({
    backgroundColor: isActive ? theme.colors.black : 'transparent',
    borderColor: isActive ? theme.colors.primary : 'transparent',
    config: config.wobbly,
  })

  return (
    <Container style={optionStyle} {...rest}>
      <Icon />
    </Container>
  )
}
