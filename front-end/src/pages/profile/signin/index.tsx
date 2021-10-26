import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useSpring, config } from 'react-spring'

import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import SignInComp from '../../../components/app/SignIn'

import bowsGrey from '../../assets/bowsGrey.png'
import AudiA1 from '../../assets/cars/audi_a1.svg'

import { ContentCar } from '../../../styles/pages'
import {
  Container,
  Content,
  ContainerCarMostRented,
  CarBows,
} from '../../../styles/pages/profile/signin'

export default function SignIn() {
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
        <title>RentX - SignIn</title>
      </Head>

      <Container>
        <Menu menuOption="profile" />
        <Header text="Profile" />

        <Content>
          <ContainerCarMostRented>
            <CarBows style={stylesBows}>
              <Image src={bowsGrey} alt="RentX" width="470" />
            </CarBows>

            <ContentCar style={stylesCar}>
              <AudiA1 className="car-most-popular" />
            </ContentCar>
          </ContainerCarMostRented>

          <SignInComp />
        </Content>
      </Container>
    </>
  )
}
