import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3.2rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.grey700};
  }

  div.prices {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.6rem;

    span.price {
      font-weight: 600;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const Content = styled.div`
  margin-top: 1.6rem;
`
