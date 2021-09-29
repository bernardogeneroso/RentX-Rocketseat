import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
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
  car: ICarWithDetails | null
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
              <>
                <CarSlide
                  images={car.carsImages}
                  car={{
                    brand: car.brand,
                    model: car.model,
                  }}
                />

                <CarDetails
                  details={{
                    ...car.carDetail,
                    fuel: car.fuel,
                    transmission: car.transmission,
                  }}
                  carInfo={{
                    plate: car.plate,
                    pricePerDay: car.pricePerDay,
                  }}
                />
              </>
            )}
          </ContainerDetails>
        </Content>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { plate: '01AB02' } },
      { params: { plate: '10ZB52' } },
      { params: { plate: '25HH65' } },
      { params: { plate: '50LV65' } },
      { params: { plate: 'GF85JU' } },
      { params: { plate: 'LE88FF' } },
      { params: { plate: 'PF58LB' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // eslint-disable-next-line
  // @ts-ignore
  const { plate } = context.params

  try {
    const { data } = await api.get(`/cars/details/${plate}`)

    return {
      props: { car: data },
      revalidate: 1 * 60, // 1 hour
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
