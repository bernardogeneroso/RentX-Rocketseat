import { HTMLAttributes } from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'
import { useSpring, config } from 'react-spring'

import { Container } from './styles'

interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  title: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  link: string
}

export default function Option({
  isActive = false,
  title,
  icon: Icon,
  link,
  ...rest
}: OptionProps) {
  const theme = useTheme()

  const optionStyle = useSpring({
    backgroundColor: isActive ? theme.colors.black : 'transparent',
    borderColor: isActive ? theme.colors.primary : 'transparent',
    config: config.wobbly,
  })

  return (
    <Link href={link} passHref>
      <Container style={optionStyle} title={title} {...rest}>
        <div className="content">
          <Icon />
        </div>
      </Container>
    </Link>
  )
}
