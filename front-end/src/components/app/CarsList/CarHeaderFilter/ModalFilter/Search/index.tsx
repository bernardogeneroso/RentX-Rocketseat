import React, { useRef, useState } from 'react'
import { useTransition, config } from 'react-spring'

import { ICar } from '../../../../../../pages/cars'
import { api } from '../../../../../../services/api'

import { Container, Input, ContainerSearch, Content } from './styles'

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [searchResult, setSearchResult] = useState<string[] | null>(null)
  const [modalSearch, setModalSearch] = useState(false)

  const transitions = useTransition(modalSearch, {
    from: { opacity: 0, translateY: -50 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0, translateY: -50 },
    config: config.gentle,
  })

  async function handleAddText(text: string) {
    if (text.length > 0 && !modalSearch) {
      setModalSearch(true)
    } else if (text.length === 0) {
      setModalSearch(false)
    }

    setValue(text)

    if (text.length > 0) {
      const { data } = await api.get<ICar[]>(`cars?search=${text}`)

      setSearchResult(
        data.map((value) => {
          return `${value.brand} - ${value.model}`
        })
      )
    }
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
                {searchResult?.map((value) => (
                  <div key={value} className="text">
                    {value}
                  </div>
                ))}
              </Content>
            </ContainerSearch>
          )
      )}
    </Container>
  )
}
