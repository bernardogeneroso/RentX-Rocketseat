import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ICar } from '../..'
import { api } from '../../../../services/api'
import Header from '../../../../components/Header'
import Menu from '../../../../components/Menu'
import CarsList from '../../../../components/app/CarsList'

import { Container } from '../../../../styles/pages/cars/filterDates/list'

interface CarsListFilterProps {
  cars: ICar[] | null
  dates: [string, string]
}

export default function List({ cars = null, dates }: CarsListFilterProps) {
  const datesTransform: [Date, Date] = [new Date(dates[0]), new Date(dates[1])]

  return (
    <>
      <Head>
        <title>RentX - Filter cars list</title>
      </Head>

      <Container>
        <Menu menuOption="car" />
        <Header text="Filter cars" />

        <CarsList {...{ cars, dates: datesTransform, filterMode: true }} />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { startDate, endDate } = context.query

    if (!startDate || !endDate) throw new Error()

    const startDateTransform = new Date(startDate.toString())
    const endDateTransform = new Date(endDate.toString())

    const { data } = await api.post('/cars/between-dates', {
      dates: {
        startDate: startDateTransform,
        endDate: endDateTransform,
      },
    })

    return {
      props: {
        cars: data,
        dates: [startDate, endDate],
      },
    }
  } catch {
    return {
      redirect: {
        destination: '/cars/filter-dates',
        permanent: false,
      },
    }
  }
}
