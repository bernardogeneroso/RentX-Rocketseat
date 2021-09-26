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
`
