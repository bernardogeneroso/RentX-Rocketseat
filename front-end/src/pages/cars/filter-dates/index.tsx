import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import CarFilterDates from '../../../components/app/CarFilterDates'
import useToast from '../../../hooks/useToast'

import { Container, Content } from '../../../styles/pages/cars/filterDates'

export default function FilterDates() {
  const router = useRouter()
  const { addToast } = useToast()

  useEffect(() => {
    if (router.query && router.query.error) {
      addToast({
        title: 'Error on getting cars',
        description: 'Try later!',
        type: 'error',
      })
    }
  }, [router.query, addToast])

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
