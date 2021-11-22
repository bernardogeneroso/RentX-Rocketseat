import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useSpring, config } from 'react-spring'

import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import SignUpComp from '../../../components/app/SignUp'

import bowsGrey from '../../assets/bowsGrey.png'
import Mustang from '../../assets/cars/mustang.svg'

import { ContentCar } from '../../../styles/pages'
import {
  Container,
  Content,
  ContainerCarMostRented,
  CarBows,
} from '../../../styles/pages/profile/signin'

export default function SignUp() {
  const stylesBows = useSpring({
    from: {
      rotate: 45,
      scale: 0,
    },
    to: {
      rotate: 180,
      scale: 1,
    },
    config: config.gentle,
  })

  const stylesCar = useSpring({
    from: {
      translateX: -300,
      scale: 0.6,
      opacity: 0,
    },
    to: {
      translateX: 0,
      scale: 1,
      opacity: 1,
    },
    config: config.gentle,
  })

  return (
    <>
      <Head>
        <title>RentX - SignUp</title>
      </Head>

      <Container>
        <Menu menuOption="profile" />
        <Header text="Profile" />

        <Content reverseCars>
          <ContainerCarMostRented>
            <CarBows style={stylesBows}>
              <Image src={bowsGrey} alt="RentX" width="470" />
            </CarBows>

            <ContentCar style={stylesCar}>
              <Mustang className="car-most-popular" />
            </ContentCar>
          </ContainerCarMostRented>

          <SignUpComp />
        </Content>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['rentxauth.user']: user } = parseCookies(ctx)

  if (user) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
