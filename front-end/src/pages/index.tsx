import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSpring, animated, config } from 'react-spring'

import { Button } from '../components/Button'

import {
  Container,
  ContainerResumeRentX,
  ContainerCarMostRented,
  ContentCar,
} from '../styles/pages'

import logo from './assets/logo.png'
import bows from './assets/bows.png'
import AudiA1 from './assets/cars/audi_a1.svg'

const Home = () => {
  const router = useRouter()

  const stylesResumeRentX = useSpring({
    from: {
      opacity: 0,
      scale: 0.6,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
    config: config.gentle,
  })

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

  function handleRedirectToCarsPage() {
    router.push('/cars')
  }

  return (
    <>
      <Head>
        <title>RentX</title>
      </Head>

      <Container>
        <ContainerResumeRentX style={stylesResumeRentX}>
          <Image src={logo} alt="RentX" />

          <div className="content">
            <h1>
              Rent one way
              <br /> car simple and easy
            </h1>

            <span>
              Various models for you to drive safe, comfortably and securely.
            </span>
          </div>

          <Button text="Start now" onClick={handleRedirectToCarsPage} />
        </ContainerResumeRentX>

        <ContainerCarMostRented>
          <animated.div style={stylesBows}>
            <Image src={bows} alt="RentX" width="470" />
          </animated.div>

          <ContentCar style={stylesCar}>
            <AudiA1 className="car-most-popular" />
          </ContentCar>
        </ContainerCarMostRented>
      </Container>
    </>
  )
}

export default Home
