import styled from 'styled-components'

export const Container = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;

  div.logo {
    cursor: pointer;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
  }

  div.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.black100};
  }

  @media screen and (max-width: 535px) {
    margin-bottom: 0.1rem;
    flex-direction: row;
    height: fit-content;

    div.logo {
      padding: 4rem;
    }

    div.content {
      padding: 1rem 2rem;
      width: 100%;
      flex-direction: row;
      justify-content: baseline;
    }
  }
`
