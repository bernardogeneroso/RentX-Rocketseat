import React from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { api } from '../../services/api'
import { ICar } from '.'

import { Container } from '../../styles/pages/cars/carId'

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

export default function CarId(data: CarIdProps) {
  const router = useRouter()

  console.log(router.query, data)

  return <Container>Olá</Container>
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
    }
  }
}
