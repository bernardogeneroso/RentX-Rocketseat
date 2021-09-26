import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

import OptionComponent from './Option'

import { Container } from './styles'

import Home from '../../pages/assets/home.svg'
import Car from '../../pages/assets/car.svg'
import Perfil from '../../pages/assets/perfil.svg'
import RentxWhite from '../../pages/assets/rentxWhite.svg'

type Option = 'home' | 'car' | 'perfil'

interface Options {
  name: Option
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const options: Options[] = [
  {
    name: 'home',
    icon: Home,
  },
  {
    name: 'car',
    icon: Car,
  },
  {
    name: 'perfil',
    icon: Perfil,
  },
]

export default function Menu() {
  const router = useRouter()
  const theme = useTheme()

  const [option, setOption] = useState<Option>('home')

  const handleSetOption = useCallback((newOption: Option) => {
    setOption(newOption)
  }, [])

  function handleRedirectToHomePage() {
    router.push('/')
  }

  return (
    <Container>
      <div className="logo" onClick={handleRedirectToHomePage}>
        <RentxWhite color={theme.colors.white} />
      </div>

      <div className="content">
        {options.map((menuOption) => (
          <OptionComponent
            key={menuOption.name}
            icon={menuOption.icon}
            title={`${menuOption.name
              .charAt(0)
              .toUpperCase()}  ${menuOption.name.slice(1)}`}
            isActive={option === menuOption.name}
            onClick={() => handleSetOption(menuOption.name)}
          />
        ))}
      </div>
    </Container>
  )
}
