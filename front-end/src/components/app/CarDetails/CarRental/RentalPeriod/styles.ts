import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  height: 100%;
  color: ${(props) => props.theme.colors.grey400};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white300};

  div.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    svg {
      fill: ${(props) => props.theme.colors.grey50};
    }

    div.each {
      div.between {
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.grey50};
        font-weight: 500;
        font-size: 1.2rem;
      }

      div.time {
        color: ${(props) => props.theme.colors.grey700};
        font-weight: 500;
        font-size: 1.6rem;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 0;
    background-color: ${(props) => props.theme.colors.primary};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.88);
    }

    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`

export const ContentTotal = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div.each {
    div.total {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.grey50};
      font-weight: 500;
      font-size: 1.2rem;
    }

    div.rental-counts {
      color: ${(props) => props.theme.colors.grey700};
      font-weight: 500;
      font-size: 1.6rem;
    }
  }

  div.rentalTotal {
    color: ${(props) => props.theme.colors.green};
    font-family: Archivo;
    font-weight: 500;
    font-size: 36px;
  }
`
