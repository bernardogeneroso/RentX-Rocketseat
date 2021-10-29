import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { Container, Content } from '../../styles/pages/profile'

export default function Profile() {
  return (
    <>
      <Head>
        <title>RentX - Profile</title>
      </Head>

      <Container>
        <Menu menuOption="profile" />
        <Header text="Profile" />

        <Content>Content</Content>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['rentxauth.userCredentials']: userData } = parseCookies(ctx)

  if (!userData) {
    return {
      redirect: {
        destination: '/profile/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
