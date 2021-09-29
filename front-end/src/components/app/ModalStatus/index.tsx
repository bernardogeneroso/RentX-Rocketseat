import React from 'react'
import { useTheme } from 'styled-components'
import { BaseModal, ModalCloseTarget } from 'react-spring-modal'

import { Container, ContainerContent, Content } from './styles'

import Union from '../../../pages/assets/union.svg'
import Done from '../../../pages/assets/done.svg'
import Fail from '../../../pages/assets/fail.svg'

interface ModalStatusProps {
  modal: boolean
  handleToggleModalStatus: () => void
  content: {
    title?: string
    subtitle?: string
    done?: boolean
  }
}

export default function ModalStatus({
  modal,
  handleToggleModalStatus,
  content: { done = false, title = 'Title', subtitle = 'Subtitle' },
}: ModalStatusProps) {
  const theme = useTheme()

  return (
    <BaseModal
      isOpen={modal}
      onDismiss={handleToggleModalStatus}
      contentTransition={{
        from: { background: 'lightcoral', transform: 'translateY(-100%)' },
        enter: { background: 'lightcyan', transform: 'translateY(0)' },
        leave: { background: 'lightcoral', transform: 'translateY(-100%)' },
      }}
      contentProps={{
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          margin: 'unset',
          padding: 'unset',
          borderRadius: '0.25rem',
          background: theme.colors.black100,
        },
      }}
    >
      <Container>
        <ContainerContent>
          <div className="union">
            <Union />
          </div>

          <Content isDone={done}>
            {done ? <Done /> : <Fail />}

            <h1>{title}</h1>

            <div className="subtitle">{subtitle}</div>

            <ModalCloseTarget>
              <button>Ok</button>
            </ModalCloseTarget>
          </Content>
        </ContainerContent>
      </Container>
    </BaseModal>
  )
}
