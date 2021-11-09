import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 2.4rem;
  }
`
