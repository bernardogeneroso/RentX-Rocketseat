import React, { useState, useCallback } from 'react'

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

const searchData = ['Lancer EVO X', 'Lancer EVO VIII', 'Lancer EVO VI']

interface SearchResults {
  last: string
  now: string
}

export function Search() {
  const [input, setInput] = useState('')
  const [inputSearchResults, setInputSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])

  const handleInputChangeText = useCallback(
    (text: string) => {
      const textInput = capitalize(text.trim())

      if (textInput.length >= 1 && !inputSearchResults) {
        setInputSearchResults(true)
      } else if (textInput.length === 0 && inputSearchResults) {
        setInputSearchResults(false)
      }

      if (textInput.length >= 1) {
        const data = searchData.map((result) => {
          return {
            last: result.substring(0, textInput.length),
            now: result.substr(textInput.length),
          }
        })

        setSearchResults(data)
      }

      setInput(textInput)
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
        />

        <ContentSearch searchMode={inputSearchResults}>
          {inputSearchResults ? (
            <ContentSearchText>{`${searchData.length} ${
              searchData.length === 1 ? 'result' : 'results'
            }`}</ContentSearchText>
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
