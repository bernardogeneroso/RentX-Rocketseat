import styled from 'styled-components'
import { animated } from 'react-spring'
import { shade } from 'polished'

export const Container = styled(animated.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.4rem;
  background-color: ${(props) => props.theme.colors.white};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => shade(0.05, props.theme.colors.white)};
  }

  div.container-image {
    width: 100%;
    max-height: 260px;
    padding: 1rem;

    > div {
      position: unset !important;
    }

    .image-car {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }

  div.line {
    margin-top: auto;
    width: 100%;
    height: 0.1rem;
    background-color: ${(props) => props.theme.colors.white300};
  }
`

export const Footer = styled.div`
  padding: 2.4rem;
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div.car-info {
    display: flex;
    flex-direction: row;

    div.car-info-first,
    div.car-info-last {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      span.info {
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.grey50};
        font-weight: 500;
        font-size: 12px;
      }

      span.info-result {
        color: ${(props) => props.theme.colors.grey700};
        font-weight: 500;
        font-size: 20px;

        &.price {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }

    div.car-info-last {
      margin-left: 2.4rem;
    }
  }
`
