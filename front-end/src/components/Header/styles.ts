import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.8rem 11.6rem;

    h3 {
      color: ${(props) => props.theme.colors.grey700};
      font-weight: 600;
    }

    div.content {
      cursor: pointer;
      margin-left: auto;
      display: flex;
      flex-direction: row;
      align-items: center;

      h3 {
        margin-right: 1.6rem;
      }

      div.perfil {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 44px;
        border-radius: 30px;
        background-color: ${(props) => props.theme.colors.white300};

        svg {
          fill: ${(props) => props.theme.colors.grey400};
        }
      }
    }
  }
`
