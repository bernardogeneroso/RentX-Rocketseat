import React, { useEffect, useState } from 'react'

import Gasoline from '../../../../../../assets/gasoline.svg'
import Electric from '../../../../../../assets/electric.svg'
import Alcohol from '../../../../../../assets/alcohol.svg'

import {
  Container,
  Header,
  CombustionTitle,
  Content,
  ContentFuel,
  FuelText,
} from './styles'

type CombustionSelected = 'Gasoline' | 'Electric' | 'Alcohol'

interface CombustionProps {
  cleanMode: boolean
}

export function Combustion({ cleanMode }: CombustionProps) {
  const [combustionSelected, setCombustionSelected] =
    useState<CombustionSelected>('Gasoline')

  useEffect(() => {
    setCombustionSelected('Gasoline')
  }, [cleanMode])

  function handleChangeCombustionSelected(combustion: CombustionSelected) {
    setCombustionSelected(combustion)
  }

  return (
    <Container>
      <Header>
        <CombustionTitle>Combustion</CombustionTitle>
      </Header>

      <Content>
        <ContentFuel
          onPress={() => handleChangeCombustionSelected('Gasoline')}
          active={combustionSelected === 'Gasoline'}
        >
          <Gasoline
            fill={combustionSelected === 'Gasoline' ? '#DC1637' : '#AEAEB3'}
          />
          <FuelText>Gasoline</FuelText>
        </ContentFuel>
        <ContentFuel
          onPress={() => handleChangeCombustionSelected('Electric')}
          active={combustionSelected === 'Electric'}
        >
          <Electric
            fill={combustionSelected === 'Electric' ? '#DC1637' : '#AEAEB3'}
          />
          <FuelText>Electric</FuelText>
        </ContentFuel>
        <ContentFuel
          onPress={() => handleChangeCombustionSelected('Alcohol')}
          active={combustionSelected === 'Alcohol'}
        >
          <Alcohol
            fill={combustionSelected === 'Alcohol' ? '#DC1637' : '#AEAEB3'}
          />
          <FuelText>Alcohol</FuelText>
        </ContentFuel>
      </Content>
    </Container>
  )
}
