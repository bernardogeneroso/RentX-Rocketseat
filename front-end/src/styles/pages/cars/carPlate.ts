import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'menu content content content'
    'menu content content content'
    'menu content content content'
    'menu content content content';

  @media screen and (max-width: 535px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;

    grid-template-areas:
      'menu menu menu menu'
      'content content content content'
      'content content content content'
      'content content content content';
  }
`

export const Content = styled.div`
  padding: 4rem 11.6rem;
  grid-area: content;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media screen and (max-width: 1120px) {
    padding: 5rem;
  }

  @media screen and (max-width: 750px) {
    padding: 4rem;
  }

  @media screen and (max-width: 535px) {
    padding: 3rem;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white400};

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.grey400};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div.car-info {
    margin-left: 6rem;
    display: flex;
    flex-direction: row;

    div.car-info-first,
    div.car-info-last {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      span.info {
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.grey50};
        font-weight: 400;
        font-size: 14px;
      }

      span.info-result {
        color: ${(props) => props.theme.colors.grey700};
        font-weight: 600;
        font-size: 36px;

        &.price {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }

    div.car-info-last {
      margin-left: 4.8rem;
    }
  }
`

export const ContainerDetails = styled.div`
  flex: 1;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8rem;

  @media screen and (max-width: 975px) {
    gap: 4rem;
    flex-direction: column;
  }
`
