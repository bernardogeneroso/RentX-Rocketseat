import React from 'react'
import { useTheme } from 'styled-components'
import { Range, getTrackBackground } from 'react-range'

import { priceFormatter } from '../../../../../../utils/priceFormatter'
import useFilterCars from '../../../../../../hooks/useFilterCars'

import { Container, Header, Content } from './styles'

export default function PricePerDay() {
  const theme = useTheme()
  const { pricePerDay, handleSetPricePerDay } = useFilterCars()

  return (
    <Container>
      <Header>
        <h3>Price per day</h3>

        <div className="prices">
          <span className="price">{priceFormatter(pricePerDay[0])}</span>
          {'-'}
          <span className="price">{priceFormatter(pricePerDay[1])}</span>
        </div>
      </Header>

      <Content>
        <Range
          values={pricePerDay}
          step={10}
          min={100}
          max={3600}
          onChange={(values) => handleSetPricePerDay(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '2px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: pricePerDay,
                    colors: [
                      theme.colors.white400,
                      theme.colors.primary,
                      theme.colors.white400,
                    ],
                    min: 10,
                    max: 100,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '24px',
                width: '32px',
                backgroundColor: theme.colors.white,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: `0px 2px 8px ${theme.colors.white350}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '0.8rem',
                }}
              >
                <div
                  style={{
                    height: '8px',
                    width: '2px',
                    backgroundColor: isDragged
                      ? theme.colors.primary
                      : theme.colors.white400,
                  }}
                />
                <div
                  style={{
                    height: '8px',
                    width: '2px',
                    backgroundColor: isDragged
                      ? theme.colors.primary
                      : theme.colors.white400,
                  }}
                />
              </div>
            </div>
          )}
        />
      </Content>
    </Container>
  )
}
