import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import CarsList from '../../components/app/CarsList'

import { Container } from '../../styles/pages/cars'
import { GetServerSideProps } from 'next'
import { api } from '../../services/api'

export interface ICar {
  plate: string
  brand: string
  model: string
  colour: string
  fuel: 'electric' | 'gasoline' | 'alcohol'
  transmission: 'manual' | 'auto'
  pricePerDay: number
  created_at: Date
  updated_at: Date
  used: number
  daysUsed: number
  carsImages: {
    url: string
    carId: string
  }[]
}

interface CarsProps {
  cars: ICar[] | null
}

export default function Cars({ cars }: CarsProps) {
  return (
    <>
      <Head>
        <title>Rentx - Start now</title>
      </Head>

      <Container>
        <Header text="Home" />
        <Menu />

        <CarsList {...{ cars }} />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get('/cars')

    return {
      props: {
        cars: data,
      },
    }
  } catch {
    return {
      props: {
        cars: null,
      },
    }
  }
}
