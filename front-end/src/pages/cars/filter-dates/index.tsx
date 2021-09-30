import React from 'react'
import Head from 'next/head'
/*import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'*/

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
          <h1>Choose a date of start and end of the rent</h1>

          <CarFilterDates />
        </Content>
      </Container>
    </>
  )
}

/*export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { 'RentX.filterDates': dates } = parseCookies(context)

    const datesParse = JSON.parse(dates)

    console.log(!!datesParse)

    if (datesParse) {
      return {
        redirect: {
          destination: '/cars/filter-dates/list',
          permanent: false,
        },
      }
    }
  } catch {}

  return {
    props: {},
  }
}*/
