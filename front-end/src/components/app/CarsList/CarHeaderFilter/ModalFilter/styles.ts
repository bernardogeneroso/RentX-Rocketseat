import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 4rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white400};

  h3 {
    color: ${(props) => props.theme.colors.grey700};
    font-family: Archivo;
    font-weight: 600;
    font-size: 2.5rem;
  }

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.grey50};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.div`
  flex: 1;
  padding-top: 3.2rem;
`
