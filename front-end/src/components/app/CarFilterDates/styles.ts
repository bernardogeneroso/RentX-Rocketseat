import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  div.container-filterBetweenDates {
    background-color: ${(props) => props.theme.colors.white};
    margin: 5rem;

    div.time {
      width: 256px;
    }
  }

  @media screen and (max-width: 915px) {
    div.container-filterBetweenDates {
      flex-direction: column;
      justify-content: center;
      padding: 2rem;

      div.calendar {
        width: 100%;
      }

      div.time {
        width: 100%;
        margin-top: 2rem;

        div.content {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 4rem;

          div.each {
            width: 160px;

            & + div {
              margin: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 535px) {
    div.container-filterBetweenDates {
      margin: 2rem;
    }
  }
`
