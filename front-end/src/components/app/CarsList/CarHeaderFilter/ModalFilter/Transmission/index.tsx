import React, { HTMLAttributes, useState } from 'react'
import { useTheme } from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { Container, Header, Content, TransmissionOption } from './styles'

type ITransmission = 'Automatic' | 'Manual'
type ITransmissions = {
  name: ITransmission
}

const transmissions: ITransmissions[] = [
  {
    name: 'Automatic',
  },
  {
    name: 'Manual',
  },
]

interface TransmissionContentProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  isActive?: boolean
}

function TransmissionContent({
  name,
  isActive,
  ...props
}: TransmissionContentProps) {
  const theme = useTheme()

  const styles = useSpring({
    backgroundColor: isActive ? theme.colors.white200 : theme.colors.white,
  })

  const stylesText = useSpring({
    color: isActive ? theme.colors.grey700 : theme.colors.grey50,
  })

  return (
    <TransmissionOption style={styles} isActive={isActive} {...props}>
      <animated.span style={stylesText}>{name}</animated.span>
    </TransmissionOption>
  )
}

export default function Transmission() {
  const [transmissionOption, setTransmissionOption] =
    useState<ITransmission>('Automatic')

  return (
    <Container>
      <Header>
        <h3>Transmission</h3>
      </Header>

      <Content>
        {transmissions.map(({ name }) => (
          <TransmissionContent
            key={name}
            name={name}
            isActive={transmissionOption === name}
            onClick={() => setTransmissionOption(name)}
          />
        ))}
      </Content>
    </Container>
  )
}
