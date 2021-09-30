import styled from 'styled-components'

export const Container = styled.div`
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
