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

    grid-template-areas:
      'header header header header'
      'menu menu menu menu'
      'content content content content'
      'content content content content';
  }
`
