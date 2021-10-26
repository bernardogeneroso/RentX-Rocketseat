import styled from 'styled-components'

export const Container = styled.div`
  padding: 0rem 2rem;
  height: 64px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.white};
  border: 0.1rem solid ${(props) => props.theme.colors.white300};

  & + div {
    margin-top: 0.8rem;
  }

  svg {
    color: ${(props) => props.theme.colors.grey400};
  }

  div.icon {
    padding: 0 2rem 0 0;
    border-right: 0.1rem solid ${(props) => props.theme.colors.white300};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    flex: 1;
    outline: 0;
    border: 0;
    padding: 0 0.6rem 0 2rem;
    color: ${(props) => props.theme.colors.grey700};

    &::placeholder {
      color: ${(props) => props.theme.colors.grey50};
    }
  }

  div.password {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }
`
