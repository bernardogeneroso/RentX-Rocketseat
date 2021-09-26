import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import CarsList from '../../components/app/CarsList'

import { Container } from '../../styles/pages/cars'

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
