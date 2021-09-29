import { HTMLAttributes, useEffect } from 'react'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const optionStyle = useSpring({
    backgroundColor: isActive ? theme.colors.black : 'transparent',
    borderColor: isActive ? theme.colors.primary : 'transparent',
    config: config.wobbly,
  })

  function handleRedirectToLink() {
    router.push(link)
  }

  return (
    <Container style={optionStyle} title={title} {...rest}>
      <div className="content" onClick={handleRedirectToLink}>
        <Icon />
      </div>
    </Container>
  )
}
