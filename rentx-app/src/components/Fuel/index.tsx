import React from 'react'

import Electric from '../../assets/electric.svg'
import Gasoline from '../../assets/gasoline.svg'
import Alcohol from '../../assets/alcohol.svg'

interface FuelProps {
  fuel: 'electric' | 'gasoline' | 'alcohol' | undefined
}

export function Fuel({ fuel }: FuelProps) {
  return fuel === 'electric' ? (
    <Electric />
  ) : fuel === 'gasoline' ? (
    <Gasoline />
  ) : (
    <Alcohol />
  )
}
