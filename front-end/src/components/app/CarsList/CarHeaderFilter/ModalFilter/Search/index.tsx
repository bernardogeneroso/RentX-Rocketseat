import React, { useRef, useState } from 'react'
import { useTransition, config } from 'react-spring'

import { Container, Input, ContainerSearch, Content } from './styles'

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [value, setValue] = useState('')
  const [modalSearch, setModalSearch] = useState(false)

  const transitions = useTransition(modalSearch, {
    from: { opacity: 0, translateY: -50 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0, translateY: -50 },
    config: config.gentle,
  })

  function handleAddText(text: string) {
    if (text.length > 0 && !modalSearch) {
      setModalSearch(true)
    } else if (text.length === 0) {
      setModalSearch(false)
    }

    setValue(text)
  }

  return (
    <Container>
      <Input
        ref={inputRef}
        placeholder="Which car do you want?"
        onChange={(event) => handleAddText(event.target.value)}
        value={value}
      />

      {transitions(
        (styles, item) =>
          item && (
            <ContainerSearch
              style={{
                ...styles,
                zIndex: modalSearch ? 1 : -1,
              }}
            >
              <Content>
                <div className="text">Lancer EVO X</div>
                <div className="text">Lancer EVO VIII</div>
                <div className="text">Lancer EVO Z</div>
              </Content>
            </ContainerSearch>
          )
      )}
    </Container>
  )
}
