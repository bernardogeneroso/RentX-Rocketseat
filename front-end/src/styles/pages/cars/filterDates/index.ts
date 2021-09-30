import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'menu header header header'
    'menu content content content'
    'menu content content content'
    'menu content content content';

  @media screen and (max-width: 535px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 80px 1fr;

    grid-template-areas:
      'header header header header'
      'menu menu menu menu'
      'content content content content'
      'content content content content';
  }
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.grey700};
    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 2.6rem;
    padding: 0rem 5rem;
    margin: -3rem 5rem;
    text-align: center;
  }

  @media screen and (max-width: 535px) {
    h1 {
      margin: 0 5rem;
    }
  }
`
