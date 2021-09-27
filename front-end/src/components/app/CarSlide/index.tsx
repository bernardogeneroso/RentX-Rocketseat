import React, { useState, useRef } from 'react'
import Image from 'next/image'
import useMeasure from 'react-use-measure'
import clamp from 'lodash.clamp'
import { useDrag } from 'react-use-gesture'
import { useSprings, config } from 'react-spring'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { ICar } from '../../../pages/cars'
import {
  Container,
  ContainerCar,
  ContainerSlide,
  ContentCar,
  Footer,
  Dot,
} from './styles'

interface CarSlideProps {
  images: {
    url: string
    carId: string
  }[]
  car: Pick<ICar, 'brand' | 'model'>
}

export default function CarSlide({ images, car }: CarSlideProps) {
  const indexSlide = useRef(0)
  const [slide, setSlide] = useState(0)
  const [containerSlideRef, { width }] = useMeasure()
  const [slides, api] = useSprings(
    images.length,
    (i) => ({
      x: i * width,
      display: i === 0 ? 'block' : 'none',
      opacity: i === 0 ? 1 : 0,
      config: config.gentle,
    }),
    [width]
  )

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      const widthAdjust = width / 1.3

      if (active && distance > widthAdjust) {
        indexSlide.current = clamp(
          indexSlide.current + (xDir > 0 ? -1 : 1),
          0,
          images.length - 1
        )

        cancel()
      }

      api.start((i) => {
        if (i < indexSlide.current || i > indexSlide.current)
          return { display: 'none', opacity: 0 }

        const x = (i - indexSlide.current) * widthAdjust + (active ? mx : 0)
        const opacity = active ? 1 - 1 / (widthAdjust / 1.6 / Math.abs(mx)) : 1

        if (active) setSlide(indexSlide.current)

        return {
          x,
          opacity,
          display: 'block',
        }
      })
    }
  )

  function handleSetPageAboutYou(pageOption: number) {
    api.start((i) => {
      if (pageOption < i || pageOption > i) {
        const x = width

        if (pageOption < i) {
          return { x: x / 2, display: 'none', opacity: 0 }
        }

        if (pageOption > i) {
          return { x: -(x / 2), display: 'none', opacity: 0 }
        }

        return { display: 'none', opacity: 0 }
      }

      indexSlide.current = i
      setSlide(i)

      return {
        x: 0,
        opacity: 1,
        display: 'block',
      }
    })
  }

  return (
    <Container>
      <ContainerSlide ref={containerSlideRef}>
        {slides.map((styles, index) => (
          <ContainerCar key={index} style={styles} {...bind()}>
            <ContentCar>
              <Image
                src={images[index].url}
                alt={`${car.brand} - ${car.model}`}
                layout="fill"
                className="image-car"
                priority
              />
            </ContentCar>
          </ContainerCar>
        ))}
      </ContainerSlide>
      <Footer>
        <FaChevronLeft
          size={14}
          onClick={() =>
            handleSetPageAboutYou(slide - 1 < 0 ? images.length - 1 : slide - 1)
          }
        />

        <div className="dots">
          {images.map((item, index) => (
            <Dot
              key={index}
              isActive={slide === index}
              onClick={() => handleSetPageAboutYou(index)}
            />
          ))}
        </div>

        <FaChevronRight
          size={14}
          onClick={() => handleSetPageAboutYou((slide + 1) % images.length)}
        />
      </Footer>
    </Container>
  )
}
