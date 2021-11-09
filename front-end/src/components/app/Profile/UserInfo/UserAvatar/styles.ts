import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme.colors.primary};
    border: 0;
    width: 40px;
    height: 40px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`

export const Content = styled.div`
  img {
    border-radius: 90px;
  }
`
