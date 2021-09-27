import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'

import Menu from '../../components/Menu'
import CarSlide from '../../components/app/CarSlide'
import CarDetails from '../../components/app/CarDetails'

import { api } from '../../services/api'
import { priceFormatter } from '../../utils/priceFormatter'
import { ICar } from '.'

import {
  Container,
  Content,
  Header,
  ContainerDetails,
} from '../../styles/pages/cars/carPlate'

interface ICarWithDetails extends ICar {
  carDetail: {
    maxSpeed: number
    topSpeed: number
    hp: number
    people: number
  }
}

interface CarIdProps {
  car: ICarWithDetails | undefined
}

export default function CarId({ car }: CarIdProps) {
  const router = useRouter()

  function handleRedirectBack() {
    router.push('/cars')
  }

  return (
    <>
      <Head>
        <title>Rentx - Car details | {router.query.plate}</title>
      </Head>

      <Container>
        <Menu />

        <Content>
          <Header>
            <FaChevronLeft onClick={handleRedirectBack} />

            <div className="car-info">
              <div className="car-info-first">
                <span className="info">{car?.brand}</span>
                <span className="info-result">{car?.model}</span>
              </div>
              <div className="car-info-last">
                <span className="info">Per day</span>
                <span className="info-result price">
                  {car?.pricePerDay && priceFormatter(car?.pricePerDay)}
                </span>
              </div>
            </div>
          </Header>

          <ContainerDetails>
            {car && (
              <CarSlide
                images={car.carsImages}
                car={{
                  brand: car.brand,
                  model: car.model,
                }}
              />
            )}

            <CarDetails />
          </ContainerDetails>
        </Content>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { plate } = context.query

  try {
    const { data } = await api.get(`/cars/details/${plate}`)

    return {
      props: { car: data },
    }
  } catch {
    return {
      props: { car: null },
      redirect: {
        destination: '/cars',
        permanent: false,
      },
    }
  }
}
