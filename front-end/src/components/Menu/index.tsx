import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

import OptionComponent from './Option'

import { Container } from './styles'

import Home from '../../pages/assets/home.svg'
import Car from '../../pages/assets/car.svg'
import Profile from '../../pages/assets/profile.svg'
import RentxWhite from '../../pages/assets/rentxWhite.svg'

type Option = 'home' | 'car' | 'profile'

interface Options {
  name: Option
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  link: string
}

const options: Options[] = [
  {
    name: 'home',
    icon: Home,
    link: '/cars',
  },
  {
    name: 'car',
    icon: Car,
    link: '/cars/filter-dates',
  },
  {
    name: 'profile',
    icon: Profile,
    link: '/profile',
  },
]

interface HomeProps {
  menuOption?: Option
}

export default function Menu({ menuOption = 'home' }: HomeProps) {
  const router = useRouter()
  const theme = useTheme()

  const [option, setOption] = useState<Option>(menuOption)

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
            link={menuOption.link}
            title={`${menuOption.name
              .charAt(0)
              .toUpperCase()}${menuOption.name.slice(1)}`}
            isActive={option === menuOption.name}
            onClick={() => handleSetOption(menuOption.name)}
          />
        ))}
      </div>
    </Container>
  )
}
