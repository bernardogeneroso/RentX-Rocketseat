import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ICar } from '../..'
import { api } from '../../../../services/api'
import Header from '../../../../components/Header'
import Menu from '../../../../components/Menu'
import CarsList from '../../../../components/app/CarsList'
import useFilterCars from '../../../../hooks/useFilterCars'

import { Container } from '../../../../styles/pages/cars/filterDates/list'

interface ListProps {
  cars: ICar[] | null
  dates: [string, string]
}

export default function List({ cars = null, dates }: ListProps) {
  const { handleSetCars, handleSetDates } = useFilterCars()

  useEffect(() => {
    handleSetCars(cars)
    handleSetDates([new Date(dates[0]), new Date(dates[1])])
  }, [cars, dates, handleSetCars, handleSetDates])

  return (
    <>
      <Head>
        <title>RentX - Filter cars list</title>
      </Head>

      <Container>
        <Menu menuOption="car" />
        <Header text="Filter cars" />

        <CarsList {...{ filterMode: true }} />
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
        destination: '/cars/filter-dates?error=true',
        permanent: false,
      },
    }
  }
}
