import React from 'react'
import Head from 'next/head'

import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import CarFilterDates from '../../../components/app/CarFilterDates'

import { Container, Content } from '../../../styles/pages/cars/filterDates'

export default function FilterDates() {
  return (
    <>
      <Head>
        <title>RentX - Filter cars</title>
      </Head>

      <Container>
        <Menu menuOption="car" />
        <Header text="Filter cars" />

        <Content>
          <span>Choose a date of start and end of the rent</span>

          <CarFilterDates />
        </Content>
      </Container>
    </>
  )
}
