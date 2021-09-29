import styled from 'styled-components'

interface ContentProps {
  isDone: boolean
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  div.union {
    flex: 1;
    max-width: 929px;
  }
`

export const Content = styled.div<ContentProps>`
  position: absolute;
  max-width: 385px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 4rem;
    color: ${(props) => props.theme.colors.white};
    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 4rem;
  }

  div.subtitle {
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.grey50};
    font-weight: normal;
    font-size: 1.6rem;
  }

  button {
    margin-top: 3.6rem;
    padding: 2rem 3.6rem;
    border: 0;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black200};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
