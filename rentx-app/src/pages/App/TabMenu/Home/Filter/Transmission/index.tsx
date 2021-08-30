import React from 'react'

import useHome from '../../../../../../hooks/useHome'
import { TransmissionSelected } from '../../../../../../hooks/contexts/Home'

import {
  Container,
  Header,
  TransmissionText,
  Content,
  ContentTransmission,
  TransmissionStatusText,
} from './styles'

export function Transmission() {
  const { transmissionSelected, handleSetTransmissionSelected } = useHome()

  function handleChangeTransmissionSelected(
    transmission: TransmissionSelected
  ) {
    handleSetTransmissionSelected(transmission)
  }

  return (
    <Container>
      <Header>
        <TransmissionText>Transmission</TransmissionText>
      </Header>

      <Content>
        <ContentTransmission
          onPress={() => handleChangeTransmissionSelected('auto')}
          active={transmissionSelected === 'auto'}
        >
          <TransmissionStatusText>Automatic</TransmissionStatusText>
        </ContentTransmission>
        <ContentTransmission
          onPress={() => handleChangeTransmissionSelected('manual')}
          active={transmissionSelected === 'manual'}
        >
          <TransmissionStatusText>Manual</TransmissionStatusText>
        </ContentTransmission>
      </Content>
    </Container>
  )
}
