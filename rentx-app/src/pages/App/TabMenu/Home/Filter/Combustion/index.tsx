import React from 'react'

import useHome from '../../../../../../hooks/useHome'
import { CombustionSelected } from '../../../../../../hooks/contexts/Home'

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

export function Combustion() {
  const { combustionSelected, handleSetCombustionSelected } = useHome()

  function handleChangeCombustionSelected(combustion: CombustionSelected) {
    handleSetCombustionSelected(combustion)
  }

  return (
    <Container>
      <Header>
        <CombustionTitle>Combustion</CombustionTitle>
      </Header>

      <Content>
        <ContentFuel
          onPress={() => handleChangeCombustionSelected('gasoline')}
          active={combustionSelected === 'gasoline'}
        >
          <Gasoline
            fill={combustionSelected === 'gasoline' ? '#DC1637' : '#AEAEB3'}
          />
          <FuelText>Gasoline</FuelText>
        </ContentFuel>
        <ContentFuel
          onPress={() => handleChangeCombustionSelected('electric')}
          active={combustionSelected === 'electric'}
        >
          <Electric
            fill={combustionSelected === 'electric' ? '#DC1637' : '#AEAEB3'}
          />
          <FuelText>Electric</FuelText>
        </ContentFuel>
        <ContentFuel
          onPress={() => handleChangeCombustionSelected('alcohol')}
          active={combustionSelected === 'alcohol'}
        >
          <Alcohol
            fill={combustionSelected === 'alcohol' ? '#DC1637' : '#AEAEB3'}
          />
          <FuelText>Alcohol</FuelText>
        </ContentFuel>
      </Content>
    </Container>
  )
}
