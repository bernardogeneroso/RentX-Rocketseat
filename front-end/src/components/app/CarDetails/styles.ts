import styled from 'styled-components'

export const Container = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  @media screen and (max-width: 975px) {
    max-width: unset;
    flex: 1;
  }
`

export const ContainerDetails = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  align-content: baseline;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white350};

  div.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
      fill: ${(props) => props.theme.colors.grey700};
    }
  }

  div.value {
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    border-left: 0.1rem solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.grey400};
    font-weight: 500;
    font-size: 1.6rem;
  }
`
