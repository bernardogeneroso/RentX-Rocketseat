import styled from 'styled-components'
import { animated } from 'react-spring'

interface TransmissionOptionProps {
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

export const TransmissionOption = styled(animated.div)<TransmissionOptionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  cursor: pointer;

  span {
    font-weight: 500;
  }
`
