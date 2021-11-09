import React, { HTMLAttributes, ReactNode, useState } from 'react'
import { useSpring, config, useTransition } from 'react-spring'
import { useTheme } from 'styled-components'

import UserData from './UserData'
import UserChangePassword from './UserChangePassword'

import { Container, Header, Option, Content } from './styles'

interface HeaderOptionProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  children: ReactNode
}

export default function UserUpdate() {
  const [option, setOption] = useState<'Data' | 'ChangePassword'>('Data')

  const transitions = useTransition(option, {
    from: { opacity: 0, translateY: -50 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0, translateY: 0 },
    delay: 200,
    config: config.gentle,
  })

  return (
    <Container>
      <Header>
        <HeaderOption
          onClick={() => setOption('Data')}
          isActive={option === 'Data'}
        >
          Data
        </HeaderOption>
        <HeaderOption
          onClick={() => setOption('ChangePassword')}
          isActive={option === 'ChangePassword'}
        >
          Change password
        </HeaderOption>
      </Header>

      <Content>
        {transitions((styles, item) =>
          item === 'Data' ? (
            <UserData {...{ styles }} />
          ) : (
            <UserChangePassword {...{ styles }} />
          )
        )}
      </Content>
    </Container>
  )
}

function HeaderOption({ isActive, children, ...rest }: HeaderOptionProps) {
  const theme = useTheme()

  const props = useSpring({
    color: isActive ? theme.colors.grey600 : theme.colors.grey50,
    borderBottom: isActive
      ? `0.2rem solid ${theme.colors.primary}`
      : `0.2rem solid transparent`,
    config: config.gentle,
  })

  return (
    <Option style={props} {...rest}>
      {children}
    </Option>
  )
}
