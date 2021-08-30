import React, { useState, useCallback } from 'react'

import useListing from '../../../../../hooks/useListing'
import { capitalize } from '../../../../../utils/capitalize'

import SearchIcon from '../../../../../assets/search.svg'

import {
  Container,
  ContentInput,
  ContentSearch,
  ContentSearchText,
  Input,
  ContentResultSearch,
  ContentResult,
  ContentResultText,
  ContentResultTextBold,
} from './styles'

//const searchData = ['Lancer EVO X', 'Lancer EVO VIII', 'Lancer EVO VI']

interface SearchResults {
  last: string
  now: string
}

export function Search() {
  const { handleWithCarsFilter, carsFilter } = useListing()

  const [input, setInput] = useState('')
  const [inputSearchResults, setInputSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])

  const handleInputChangeText = useCallback(
    async (text: string) => {
      const textInput = capitalize(text.trim())

      if (textInput.length >= 1 && !inputSearchResults) {
        setInputSearchResults(true)
      } else if (textInput.length === 0 && inputSearchResults) {
        setInputSearchResults(false)
      }

      setInput(textInput)

      if (textInput.length >= 1) {
        const carsSearchData = await handleWithCarsFilter(textInput)

        if (!carsSearchData) return

        const data = carsSearchData.map((result) => {
          const name = `${result.brand} ${result.model}`

          return {
            last: name.substring(0, textInput.length),
            now: name.substr(textInput.length),
          }
        })

        setSearchResults(data)
      } else {
        await handleWithCarsFilter('')
      }
    },
    [inputSearchResults]
  )
  return (
    <Container>
      <ContentInput searchMode={inputSearchResults}>
        <Input
          placeholder="What car are you looking for?"
          placeholderTextColor="#A0A0B2"
          onChangeText={handleInputChangeText}
          searchMode={inputSearchResults}
          value={input}
        />

        <ContentSearch searchMode={inputSearchResults}>
          {inputSearchResults ? (
            <ContentSearchText>
              {carsFilter &&
                `${carsFilter.length} ${
                  carsFilter.length === 1 ? 'result' : 'results'
                }`}
            </ContentSearchText>
          ) : (
            <SearchIcon />
          )}
        </ContentSearch>
      </ContentInput>

      {inputSearchResults && (
        <ContentResultSearch>
          {searchResults.map((result) => (
            <ContentResult key={result.last + result.now}>
              <ContentResultText>{result.last}</ContentResultText>
              <ContentResultTextBold>{result.now}</ContentResultTextBold>
            </ContentResult>
          ))}
        </ContentResultSearch>
      )}
    </Container>
  )
}
