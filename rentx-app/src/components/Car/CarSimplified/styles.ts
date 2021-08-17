import styled, { css } from 'styled-components/native'

import { theme } from '../../../global/styles/theme'

interface ContentSchedulesProps {
  timeMode?: boolean
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: column;
`

export const ContentInfo = styled.View`
  flex-direction: row;
  height: 136px;
  padding: 24px;
  margin-top: 16px;
  background-color: ${theme.colors.white150};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};
`

export const Details = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 14px;
`

export const CarDetails = styled.View`
  flex-direction: column;
`

export const ContentPerDay = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`

export const CarText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey200};
  text-transform: uppercase;
  font-size: 10px;
`

export const CarModel = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 15px;
`

export const CarPrice = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.primary};
  font-size: 15px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const CarFuel = styled.View`
  margin-left: 14px;
`

export const CarImage = styled.Image`
  flex: 1;
`

export const ContentSchedules = styled.View<ContentSchedulesProps>`
  height: 40px;
  margin-top: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.ok.background};

  ${(props) =>
    props.timeMode &&
    css`
      flex-direction: row;
      justify-content: space-between;
      background-color: ${theme.colors.white150};
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 15px;
      padding-bottom: 15px;
    `}
`

export const ScheduleTimeText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.ok.text};
  font-size: 15px;
`

export const TimeText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey200};
  font-size: 10px;
  text-transform: uppercase;
`

export const ContentTime = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StartTimeText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey700};
  font-size: 13px;
  margin-right: 10px;
`

export const EndTimeText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey700};
  font-size: 13px;
  margin-left: 10px;
`
