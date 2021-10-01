import React, { useState } from 'react'
import { BaseModal } from 'react-spring-modal'

import { Container, Input, Content } from './styles'

export default function Search() {
  const [value, setValue] = useState('')
  const [modalCarFilter, setModalCarFilter] = useState(false)

  function handleAddText(text: string) {
    const textTreated = text.trim()

    if (text.length > 0 && !modalCarFilter) setModalCarFilter(true)

    setValue(textTreated)
  }

  function handleToggleModalCarFilter() {
    setModalCarFilter((state) => !state)
  }

  return (
    <Container>
      <Input
        placeholder="Which car do you want?"
        onChange={(event) => handleAddText(event.target.value)}
        value={value}
      />

      <BaseModal
        isOpen={modalCarFilter}
        onDismiss={handleToggleModalCarFilter}
        contentProps={{
          style: {
            margin: '22rem 0 0 0',
            padding: 0,
            position: 'absolute',
            top: 0,
            right: '4rem',
            width: '100%',
            maxWidth: 320,
          },
        }}
      >
        <Content>
          <div className="text">Lancer EVO X</div>
          <div className="text">Lancer EVO VIII</div>
          <div className="text">Lancer EVO Z</div>
        </Content>
      </BaseModal>
    </Container>
  )
}
