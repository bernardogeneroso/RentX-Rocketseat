import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.6rem 4.8rem;
  background-color: ${(props) => props.theme.colors.black100};

  div.title {
    color: ${(props) => props.theme.colors.white};
    font-family: Archivo;
    font-weight: 600;
    font-size: 18px;
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
