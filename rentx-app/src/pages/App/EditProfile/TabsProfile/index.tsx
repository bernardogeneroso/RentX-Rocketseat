import React, { useRef, useState } from 'react'
import PagerView from 'react-native-pager-view'

import { ProfileChangeData } from './ProfileChangeData'
import { ProfileChangePassword } from './ProfileChangePassword'

import { Container, Header, ContentTab, TextTab, Content } from './styles'

export function TabsProfile() {
  const pagerViewRef = useRef<PagerView>(null)

  const [page, setPage] = useState<number>(0)

  function setPager(page: number) {
    pagerViewRef.current?.setPage(page)

    setPage(page)
  }

  return (
    <Container>
      <Header>
        <ContentTab onPress={() => setPager(0)} active={page === 0}>
          <TextTab active={page === 0}>Data</TextTab>
        </ContentTab>
        <ContentTab onPress={() => setPager(1)} active={page === 1}>
          <TextTab active={page === 1}>Change password</TextTab>
        </ContentTab>
      </Header>

      <PagerView
        ref={pagerViewRef}
        style={{
          flex: 1,
        }}
        onPageSelected={(props) => setPage(props.nativeEvent.position)}
        initialPage={page}
      >
        <Content>
          <ProfileChangeData />
        </Content>
        <Content>
          <ProfileChangePassword />
        </Content>
      </PagerView>
    </Container>
  )
}
