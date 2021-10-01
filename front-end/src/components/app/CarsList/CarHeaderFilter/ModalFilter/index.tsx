import React from 'react'
import { useTheme } from 'styled-components'
import { BaseModal, ModalCloseTarget } from 'react-spring-modal'

import Search from './Search'

import { Container, Header, Content } from './styles'

import Close from '../../../../../pages/assets/close.svg'

interface ModalFilter {
  modalFilter: boolean
  handleToggleModalFilter: () => void
}

export default function ModalFilter({
  modalFilter,
  handleToggleModalFilter,
}: ModalFilter) {
  const theme = useTheme()

  return (
    <BaseModal
      isOpen={modalFilter}
      onDismiss={handleToggleModalFilter}
      contentTransition={{
        from: { transform: 'translateX(100%)' },
        enter: { transform: 'translateX(0)' },
        leave: { transform: 'translateX(100%)' },
      }}
      contentProps={{
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          maxWidth: 400,
          width: '100%',
          margin: 'unset',
          padding: 'unset',
          borderRadius: '0.25rem',
          background: theme.colors.white200,
        },
      }}
    >
      <Container>
        <Header>
          <h3>Filter</h3>

          <ModalCloseTarget>
            <Close />
          </ModalCloseTarget>
        </Header>

        <Content>
          <Search />
        </Content>
      </Container>
    </BaseModal>
  )
}
