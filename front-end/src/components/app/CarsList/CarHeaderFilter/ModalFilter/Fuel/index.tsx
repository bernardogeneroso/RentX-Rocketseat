import React, { HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { IFuel } from '../../../../../../hooks/contexts/FilterCars'
import useFilterCars from '../../../../../../hooks/useFilterCars'

import Gasoline from '../../../../../../pages/assets/cars/fuels/gasoline.svg'
import Electric from '../../../../../../pages/assets/cars/fuels/electric.svg'
import Alcohol from '../../../../../../pages/assets/cars/fuels/alcohol.svg'

import { Container, Header, Content, FuelOption } from './styles'

type IFuels = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  name: IFuel
}

const fuels: IFuels[] = [
  {
    icon: Gasoline,
    name: 'Gasoline',
  },
  {
    icon: Electric,
    name: 'Electric',
  },
  {
    icon: Alcohol,
    name: 'Alcohol',
  },
]

interface FuelContentProps extends HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  isActive?: boolean
  name: string
}

function FuelContent({
  isActive,
  icon: Icon,
  name,
  ...props
}: FuelContentProps) {
  const theme = useTheme()

  const styles = useSpring({
    backgroundColor: isActive ? theme.colors.white200 : theme.colors.white,
  })

  const stylesText = useSpring({
    color: isActive ? theme.colors.grey700 : theme.colors.grey50,
  })

  return (
    <FuelOption isActive={isActive} style={styles} {...props}>
      <Icon />
      <animated.span style={stylesText}>{name}</animated.span>
    </FuelOption>
  )
}

export default function Fuel() {
  const { fuel, handleSetFuel } = useFilterCars()

  return (
    <Container>
      <Header>
        <h3>Fuel</h3>
      </Header>

      <Content>
        {fuels.map(({ name, icon }) => (
          <FuelContent
            key={name}
            name={name}
            icon={icon}
            isActive={fuel === name}
            onClick={() => handleSetFuel(name)}
          />
        ))}
      </Content>
    </Container>
  )
}
