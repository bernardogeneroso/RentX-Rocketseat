import styled, { css } from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

interface ContainerOnboardProps {
  lastView?: boolean
}

interface HeaderProps {
  lastView?: boolean
}

interface TitleProps {
  lastView?: boolean
}

interface SubtitleProps {
  lastView?: boolean
}

interface FooterProps {
  lastView?: boolean
}

interface DotProps {
  active?: boolean
}

interface ButtonProps {
  second?: boolean
}

export const Container = styled.View`
  flex: 1;
`
export const ContainerOnboard = styled.View<ContainerOnboardProps>`
  padding-top: ${getStatusBarHeight() + 50}px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.lastView &&
    css`
      background-color: #1b1b1f;
    `}
`

export const Header = styled.View<HeaderProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.lastView ? 'center' : 'space-between')};
`

export const Numbering = styled.Text`
  font-size: 68px;
  font-weight: bold;
  color: #ebebf0;
`

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
`

export const Title = styled.Text<TitleProps>`
  font-size: 42px;
  font-weight: bold;
  color: #47474d;
  line-height: 42px;
  ${(props) =>
    props.lastView &&
    css`
      color: #fff;
      text-align: center;
    `}
`

export const Subtitle = styled.Text<SubtitleProps>`
  font-size: 15px;
  font-weight: 400;
  color: #7a7a80;
  line-height: 25px;
  margin-top: ${(props) => (props.lastView ? 10 : 26)}px;
  ${(props) =>
    props.lastView &&
    css`
      color: #fff;
      text-align: center;
    `}
`

export const Footer = styled.View<FooterProps>`
  width: 100%;
  align-items: center;
  ${(props) =>
    props.lastView
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
          justify-content: space-between;
        `}
`

export const FooterContent = styled.View`
  flex-direction: row;
`

export const PagesContainer = styled.View`
  flex-direction: row;
`

export const Dot = styled.View<DotProps>`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-left: 6px;
  background-color: ${(props) => (props.active ? '#47474d' : '#AEAEB3')};
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  padding: 16px;
  ${(props) =>
    props.second
      ? css`
          background-color: #29292e;
          margin-left: 16px;
        `
      : css`
          background-color: #dc1637;
        `}
`

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
`

export const ButtonGoBack = styled.TouchableOpacity``

export const ButtonGoBackText = styled.Text`
  margin-top: 26px;
  color: #fff;
`
