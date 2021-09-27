import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { ICar } from '../../../../pages/cars'
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

export default function Car({ car, styles }: CarProps) {
  const router = useRouter()

  function handleRedirectToPageCarDetails() {
    router.push(`/cars/${car.plate}`)
  }

  return (
    <Container
      style={styles}
      title={`${car.brand} - ${car.model}`}
      onClick={handleRedirectToPageCarDetails}
    >
      <div className="container-image">
        {car.carsImages[0]?.url && (
          <Image
            src={car.carsImages[0]?.url}
            alt={`${car.brand} - ${car.model}`}
            layout="fill"
            className="image-car"
          />
        )}
      </div>

      <div className="line" />

      <Footer>
        <div className="car-info">
          <div className="car-info-first">
            <span className="info">{car.brand}</span>
            <span className="info-result">{car.model}</span>
          </div>
          <div className="car-info-last">
            <span className="info">Per day</span>
            <span className="info-result price">
              {priceFormatter(car.pricePerDay)}
            </span>
          </div>
        </div>

        {car.fuel === 'electric' ? (
          <Electric title="Electric" />
        ) : car.fuel === 'gasoline' ? (
          <Gasoline title="Gasoline" />
        ) : (
          <Alcohol title="Alcohol" />
        )}
      </Footer>
    </Container>
  )
}
