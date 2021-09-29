import React from 'react'

import CarRental from './CarRental'

import { Container, ContainerDetails, Content } from './styles'

import Speed from '../../../pages/assets/speed.svg'
import TopSpeed from '../../../pages/assets/top-speed.svg'
import Gasoline from '../../../pages/assets/cars/fuels/gasoline.svg'
import Electric from '../../../pages/assets/cars/fuels/electric.svg'
import Alcohol from '../../../pages/assets/cars/fuels/alcohol.svg'
import GearShift from '../../../pages/assets/gear-shift.svg'
import Perfil from '../../../pages/assets/perfil.svg'
import StrongHp from '../../../pages/assets/strong-hp.svg'

interface CarDetailsProps {
  details: {
    fuel: 'electric' | 'gasoline' | 'alcohol'
    transmission: 'manual' | 'auto'
    maxSpeed: number
    topSpeed: number
    hp: number
    people: number
  }
  carInfo: {
    plate: string
    pricePerDay: number
  }
}

interface ICarDetails {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  value: string | number
}

export default function CarDetails({ details, carInfo }: CarDetailsProps) {
  const carDetails: ICarDetails[] = [
    {
      Icon: Speed,
      value: `${details.maxSpeed}km/h`,
    },
    {
      Icon: TopSpeed,
      value: `${details.topSpeed}s`,
    },
    {
      Icon:
        details.fuel === 'gasoline'
          ? Gasoline
          : details.fuel === 'electric'
          ? Electric
          : Alcohol,
      value: details.fuel,
    },
    {
      Icon: GearShift,
      value: details.transmission,
    },
    {
      Icon: Perfil,
      value: `${details.people} persons`,
    },
    {
      Icon: StrongHp,
      value: `${details.hp} HP`,
    },
  ]

  return (
    <Container>
      <ContainerDetails>
        {carDetails.map((detail) => (
          <Content key={detail.value}>
            <div className="icon">
              <detail.Icon width={32} height={32} />
            </div>

            <div className="value">{detail.value}</div>
          </Content>
        ))}
      </ContainerDetails>

      <CarRental {...{ carInfo }} />
    </Container>
  )
}
