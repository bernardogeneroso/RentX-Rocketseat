import styled from 'styled-components'
import { animated } from 'react-spring'

interface FuelOptionProps {
  isActive?: boolean
}

export const Container = styled.div`
  margin-top: 3.2rem;
`

export const Header = styled.div`
  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.grey700};
  }
`

export const Content = styled.div`
  margin-top: 1.6rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.white};
`

export const FuelOption = styled(animated.div)<FuelOptionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  cursor: pointer;
  color: ${(props) =>
    props.isActive ? props.theme.colors.grey700 : props.theme.colors.grey50};

  background-color: ${(props) =>
    props.isActive ? props.theme.colors.white200 : 'transparent'};

  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.grey50};
  }

  span {
    font-weight: 500;
    margin-top: 1rem;
  }
`
