import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import ProfileComp from '../../components/app/Profile'

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

        <Content>
          <ProfileComp />
        </Content>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  const rentxAuthUserCredentials = cookies['rentxauth.userCredentials']

  if (!rentxAuthUserCredentials) {
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
