import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  height: 100%;
  display: flex;
  flex-direction: column;

  div.content {
    flex: 1;
    color: ${(props) => props.theme.colors.grey400};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
  }

  button {
    padding: 2.9rem 3rem;
  }
`
