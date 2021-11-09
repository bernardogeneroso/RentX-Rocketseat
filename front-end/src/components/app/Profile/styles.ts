import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'userInfo separator userAppointments';
  gap: 5rem;
`

export const Separator = styled.div`
  grid-area: separator;
  height: 100%;
  width: 1px;
  background-color: ${(props) => props.theme.colors.white400};
`
