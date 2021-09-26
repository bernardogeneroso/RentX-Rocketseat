import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  padding: 4rem 11.6rem 4rem;
  overflow: auto;

  @media screen and (max-width: 750px) {
    padding: 5rem;
  }

  @media screen and (max-width: 535px) {
    padding: 3rem;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white400};

  h1 {
    color: ${(props) => props.theme.colors.grey700};
    font-weight: 600;
    font-size: 3.6rem;
    margin-right: 1rem;
  }

  span {
    color: ${(props) => props.theme.colors.grey400};
    font-weight: normal;
    font-size: 1.6rem;
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
