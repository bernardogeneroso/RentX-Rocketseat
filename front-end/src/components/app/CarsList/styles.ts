import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  padding: 4rem 11.6rem 4rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.grey25};

  @media screen and (max-width: 750px) {
    padding: 5rem;
  }

  @media screen and (max-width: 535px) {
    padding: 3rem;
  }
`

export const Content = styled.div`
  margin-top: 2.4rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1278px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 956px) {
    grid-template-columns: 1fr;
  }
`
