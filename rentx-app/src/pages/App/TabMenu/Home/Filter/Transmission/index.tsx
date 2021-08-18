import React, { useEffect, useState } from 'react'

import {
  Container,
  Header,
  TransmissionText,
  Content,
  ContentTransmission,
  TransmissionStatusText,
} from './styles'

type TransmissionSelected = 'Automatic' | 'Manual'

interface TransmissionProps {
  cleanMode: boolean
}

export function Transmission({ cleanMode }: TransmissionProps) {
  const [transmissionSelected, setTransmissionSelected] =
    useState<TransmissionSelected>('Automatic')

  useEffect(() => {
    setTransmissionSelected('Automatic')
  }, [cleanMode])

  function handleChangeTransmissionSelected(
    transmission: TransmissionSelected
  ) {
    setTransmissionSelected(transmission)
  }

  return (
    <Container>
      <Header>
        <TransmissionText>Transmission</TransmissionText>
      </Header>

      <Content>
        <ContentTransmission
          onPress={() => handleChangeTransmissionSelected('Automatic')}
          active={transmissionSelected === 'Automatic'}
        >
          <TransmissionStatusText>Automatic</TransmissionStatusText>
        </ContentTransmission>
        <ContentTransmission
          onPress={() => handleChangeTransmissionSelected('Manual')}
          active={transmissionSelected === 'Manual'}
        >
          <TransmissionStatusText>Manual</TransmissionStatusText>
        </ContentTransmission>
      </Content>
    </Container>
  )
}
