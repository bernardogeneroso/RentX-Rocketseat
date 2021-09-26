import React, { useState } from 'react'
import { useTransition, config } from 'react-spring'

import Car from './Car'

import AudiA5 from '../../../pages/assets/cars/audi_a5.svg'
import CorvetteZ06 from '../../../pages/assets/cars/corvette_Z06.svg'
import Panamera from '../../../pages/assets/cars/panamera.svg'
import LamborghiniHuracan from '../../../pages/assets/cars/lamborghini_huracan.svg'
import VolvoXC40 from '../../../pages/assets/cars/volvo_xc40.svg'
import LancerEvoX from '../../../pages/assets/cars/lancer_evo_x.svg'

import { Container, Header, Content } from './styles'

export interface ICar {
  id: string
  brand: string
  model: string
  pricePerDay: number
  fuel: 'electric' | 'gasoline' | 'alcohol'
  imageCar: React.FC<React.SVGProps<SVGSVGElement>>
}

const carsFictional: ICar[] = [
  {
    id: 'car1',
    brand: 'Audi',
    model: 'RS 5 Coupe',
    pricePerDay: 640,
    fuel: 'electric',
    imageCar: AudiA5,
  },
  {
    id: 'car2',
    brand: 'Chevrolet',
    model: 'Corvette Z06',
    pricePerDay: 1200,
    fuel: 'gasoline',
    imageCar: CorvetteZ06,
  },
  {
    id: 'car3',
    brand: 'Porche',
    model: 'Panamera',
    pricePerDay: 340,
    fuel: 'electric',
    imageCar: Panamera,
  },
  {
    id: 'car4',
    brand: 'Lamborghini',
    model: 'Huracan',
    pricePerDay: 3600,
    fuel: 'gasoline',
    imageCar: LamborghiniHuracan,
  },
  {
    id: 'car5',
    brand: 'Volvo',
    model: 'XC40',
    pricePerDay: 1200,
    fuel: 'alcohol',
    imageCar: VolvoXC40,
  },
  {
    id: 'car6',
    brand: 'Mitsubishi',
    model: 'Lancer Evo X',
    pricePerDay: 820,
    fuel: 'gasoline',
    imageCar: LancerEvoX,
  },
]

export default function CarsList() {
  const [cars] = useState(carsFictional)

  const transitionsCars = useTransition(cars, {
    keys: (item) => item.id,
    from: { opacity: 0, translateY: 100, scale: 0.6 },
    enter: { opacity: 1, translateY: 0, scale: 1 },
    leave: { opacity: 0, translateY: -100, scale: 0 },
    config: config.gentle,
    delay: 200,
  })

  return (
    <Container>
      <Header>
        <h1>Available cars</h1>

        <span>
          Total {`${cars.length} ${cars.length === 1 ? 'car' : 'cars'}`}
        </span>
      </Header>

      <Content>
        {transitionsCars((styles, item) => (
          <Car key={item.id} {...{ car: item, styles }} />
        ))}
      </Content>
    </Container>
  )
}
