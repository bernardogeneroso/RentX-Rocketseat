import styled from 'styled-components'

export const Container = styled.div`
  grid-area: signin;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 3.6rem;
    color: ${(props) => props.theme.colors.grey600};
    padding-bottom: 2.4rem;
  }

  div.moreInformation {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.grey400};
    padding-bottom: 4rem;
  }

  @media screen and (max-width: 1310px) {
    max-width: 535px;
  }

  @media screen and (max-width: 535px) {
    padding: 1rem;
    max-width: unset;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1.6rem;
    padding: 1.6rem 4rem;
    height: 64px;
  }
`
