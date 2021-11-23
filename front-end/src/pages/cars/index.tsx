import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import CarsList from '../../components/app/CarsList'

import { Container } from '../../styles/pages/cars'

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

export default function Cars() {
  return (
    <>
      <Head>
        <title>Rentx - Start now</title>
      </Head>

      <Container>
        <Header text="Home" />
        <Menu />

        <CarsList />
      </Container>
    </>
  )
}
