import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.6rem 4.8rem;
  background-color: ${(props) => props.theme.colors.black100};

  div.title {
    color: ${(props) => props.theme.colors.white};
    font-family: Archivo;
    font-weight: 600;
    font-size: 18px;
  }

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.grey50};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3.8rem;

  div.calendar {
    border: 0;

    div.react-calendar__navigation {
      svg {
        width: 20px;
        fill: ${(props) => props.theme.colors.grey400};

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      button:hover,
      button[disabled] {
        background: none;
      }

      button.react-calendar__navigation__prev2-button {
        display: none;
      }

      button.react-calendar__navigation__next2-button {
        display: none;
      }

      button.react-calendar__navigation__label span {
        color: ${(props) => props.theme.colors.grey700};
        font-family: Archivo;
        font-weight: 600;
        font-size: 20px;
      }
    }

    div.react-calendar__viewContainer div.react-calendar__month-view__weekdays {
      div.react-calendar__month-view__weekdays__weekday {
        border-bottom: 0.1rem solid ${(props) => props.theme.colors.white300};
        padding-bottom: 1rem;

        abbr {
          text-decoration: none;
          color: ${(props) => props.theme.colors.grey50};
          font-family: Archivo;
          font-weight: 600;
          font-size: 12px;
        }
      }
    }

    div.react-calendar__month-view__days {
      margin-top: 2.9rem;

      button {
        color: ${(props) => props.theme.colors.grey700};
        font-weight: normal;
        font-size: 1.6rem;
      }

      button.react-calendar__tile:disabled {
        background: none;
      }

      button.react-calendar__month-view__days__day--weekend {
        color: revert;
      }

      button.react-calendar__tile--now {
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => props.theme.colors.white};
        font-weight: 600;
      }

      button.react-calendar__tile--range,
      button.react-calendar__tile--hover {
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => lighten(0.49, props.theme.colors.primary)};
        font-weight: 600;
      }

      button.react-calendar__tile--rangeStart,
      button.react-calendar__tile--rangeEnd {
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.primary};
      }
    }
  }

  div.time {
    display: flex;
    flex-direction: column;

    div.content {
      flex: 1;

      div.each {
        & + div {
          margin-top: 4rem;
        }

        div.between {
          text-transform: uppercase;
          color: ${(props) => props.theme.colors.grey50};
          font-weight: 500;
          font-size: 1.2rem;
        }

        div.time {
          margin-top: 0.8rem;
          color: ${(props) => props.theme.colors.grey700};
          font-weight: 500;
          font-size: 1.6rem;
        }
      }
    }

    button {
      padding: 2rem 8rem;
    }
  }
`
