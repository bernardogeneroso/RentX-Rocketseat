import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'

import OptionComponent from './Option'

import { Container } from './styles'
import useAuth from '../../hooks/useAuth'

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
  const { isAuthenticated } = useAuth()
  const theme = useTheme()

  const [option, setOption] = useState<Option>(menuOption)

  const handleSetOption = useCallback((newOption: Option) => {
    setOption(newOption)
  }, [])

  return (
    <Container>
      <Link href="/" passHref>
        <div className="logo">
          <RentxWhite color={theme.colors.white} />
        </div>
      </Link>

      <div className="content">
        {options.map((menuOption) => (
          <OptionComponent
            key={menuOption.name}
            icon={menuOption.icon}
            link={
              menuOption.link === '/profile'
                ? isAuthenticated
                  ? menuOption.link
                  : '/profile/signin'
                : menuOption.link
            }
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
