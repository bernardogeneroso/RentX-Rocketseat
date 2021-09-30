import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white400};

  h1 {
    color: ${(props) => props.theme.colors.grey700};
    font-family: Archivo;
    font-weight: 600;
    font-size: 3.6rem;
  }
`

export const Content = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  div.dates {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    svg {
      fill: ${(props) => props.theme.colors.grey50};
    }

    div.each {
      div.between {
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.grey50};
        font-weight: 500;
        font-size: 1.2rem;
      }

      div.time {
        margin-top: 0.4rem;
        color: ${(props) => props.theme.colors.grey700};
        font-weight: 500;
        font-size: 1.6rem;
      }
    }
  }

  div.optionFilter {
    margin-left: 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border: 0;
      background-color: ${(props) => props.theme.colors.primary};

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.88);
      }

      svg {
        fill: ${(props) => props.theme.colors.white};
      }
    }

    div.line {
      width: 1px;
      height: 24px;

      background-color: ${(props) => props.theme.colors.white400};
    }
  }
`
