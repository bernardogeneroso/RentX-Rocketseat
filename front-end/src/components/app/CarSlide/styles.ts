import styled from 'styled-components'
import { animated } from 'react-spring'

interface DotProps {
  isActive?: boolean
}

export const Container = styled.div`
  max-width: 700px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ContainerSlide = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: pan-y;
`

export const ContainerCar = styled(animated.div)`
  height: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

export const ContentCar = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: unset !important;
  }

  .image-car {
    transform: scaleX(-1);
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.grey50};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div.dots {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    margin-left: 2.4rem;
    margin-right: 2.4rem;
  }
`

export const Dot = styled.div<DotProps>`
  cursor: pointer;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: ${(props) =>
    props.isActive ? props.theme.colors.grey700 : props.theme.colors.grey50};
`
