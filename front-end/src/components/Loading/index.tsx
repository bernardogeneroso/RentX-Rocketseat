import React from 'react'
import { useTheme } from 'styled-components'
import BeatLoader from 'react-spinners/BeatLoader'

import { Container } from './styles'

export default function Loading() {
  const theme = useTheme()

  return (
    <Container>
      <BeatLoader color={theme.colors.primary} />
    </Container>
  )
}
