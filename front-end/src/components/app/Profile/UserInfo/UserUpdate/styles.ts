import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  margin-top: 4rem;
  height: 400px;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3.2rem;

  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white400};
`

export const Option = styled(animated.div)`
  cursor: pointer;
  padding-bottom: 1.4rem;
  font-family: Archivo;
  font-weight: 600;
  font-size: 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Content = styled.div`
  margin-top: 2.4rem;
  position: relative;
  height: inherit;
`
