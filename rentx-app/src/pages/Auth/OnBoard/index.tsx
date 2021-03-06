import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, TouchableOpacity, StatusBar } from 'react-native'
import PagerView from 'react-native-pager-view'
import { Feather } from '@expo/vector-icons'

import { onboard } from '../../../utils/onboard'

import {
  Container,
  ContainerOnboard,
  Header,
  Numbering,
  Content,
  Footer,
  FooterContent,
  Title,
  Subtitle,
  PagesContainer,
  Dot,
  Button,
  ButtonText,
  ButtonGoBack,
  ButtonGoBackText,
} from './styles'

interface OnBoardProps {
  route: {
    params: {
      page?: number
    }
  }
}

export function OnBoard({ route }: OnBoardProps) {
  const pagerViewRef = useRef<PagerView>(null)
  const navigation = useNavigation()

  const [pageSelected, setPageSelected] = useState(0)

  function setPage(page: number) {
    pagerViewRef.current?.setPage(page)
  }

  function handleNavigateToSignIn() {
    // @ts-ignore
    navigation.navigate('SignIn')
  }

  function handleNavigateToSignUp() {
    // @ts-ignore
    navigation.navigate('SignUp')
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={
          pageSelected === 0 || pageSelected === 1
            ? 'dark-content'
            : 'light-content'
        }
        translucent
      />

      <Container>
        <PagerView
          ref={pagerViewRef}
          style={{
            flex: 1,
          }}
          initialPage={route.params?.page ?? 0}
          onPageSelected={(props) =>
            setPageSelected(props.nativeEvent.position)
          }
        >
          {onboard.map((item, index) =>
            index !== onboard.length - 1 ? (
              <ContainerOnboard key={item.id}>
                <Header>
                  <Image source={item.image} />

                  <Numbering>
                    {item.id.length === 1 ? '0' + item.id : item.id}
                  </Numbering>
                </Header>

                <Content>
                  <Title>{item.title}</Title>

                  <Subtitle>{item.subtitle}</Subtitle>
                </Content>

                <Footer>
                  <PagesContainer>
                    <Dot active={index === 0} />
                    <Dot active={index === 1} />
                  </PagesContainer>

                  <TouchableOpacity
                    onPress={() => setPage((index + 1) % onboard.length)}
                  >
                    <Feather name="chevron-right" size={24} color="#AEAEB3" />
                  </TouchableOpacity>
                </Footer>
              </ContainerOnboard>
            ) : (
              <ContainerOnboard key={item.id} lastView>
                <Header lastView>
                  <Image source={item.image} />
                </Header>

                <Content>
                  <Title lastView>{item.title}</Title>

                  <Subtitle lastView>{item.subtitle}</Subtitle>
                </Content>

                <Footer lastView>
                  <FooterContent>
                    <Button onPress={handleNavigateToSignIn}>
                      <ButtonText>Sign In</ButtonText>
                    </Button>

                    <Button onPress={handleNavigateToSignUp} second>
                      <ButtonText>Sign Up</ButtonText>
                    </Button>
                  </FooterContent>

                  <ButtonGoBack onPress={() => setPage(0)}>
                    <ButtonGoBackText>Go back</ButtonGoBackText>
                  </ButtonGoBack>
                </Footer>
              </ContainerOnboard>
            )
          )}
        </PagerView>
      </Container>
    </>
  )
}
