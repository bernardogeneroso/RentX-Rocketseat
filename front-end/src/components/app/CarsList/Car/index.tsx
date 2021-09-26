import React from 'react'

import { ICar } from '../'
import { priceFormatter } from '../../../../utils/priceFormatter'

import { Container, Footer } from './styles'

import Electric from '../../../../pages/assets/cars/fuels/electric.svg'
import Gasoline from '../../../../pages/assets/cars/fuels/gasoline.svg'
import Alcohol from '../../../../pages/assets/cars/fuels/alcohol.svg'

interface CarProps {
  car: ICar
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
}

export default function Car({
  car: { brand, model, fuel, pricePerDay, imageCar: ImageCar },
  styles,
}: CarProps) {
  return (
    <Container style={styles} title={`${brand} - ${model}`}>
      <div className="container-image">
        <ImageCar />
      </div>

      <div className="line" />

      <Footer>
        <div className="car-info">
          <div className="car-info-first">
            <span className="info">{brand}</span>
            <span className="info-result">{model}</span>
          </div>
          <div className="car-info-last">
            <span className="info">Per day</span>
            <span className="info-result price">
              {priceFormatter(pricePerDay)}
            </span>
          </div>
        </div>

        {fuel === 'electric' ? (
          <Electric title="Electric" />
        ) : fuel === 'gasoline' ? (
          <Gasoline title="Gasoline" />
        ) : (
          <Alcohol title="Alcohol" />
        )}
      </Footer>
    </Container>
  )
}
