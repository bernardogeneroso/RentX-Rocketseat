import React, { useState, useCallback, useRef } from 'react'
import PagerView from 'react-native-pager-view'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native'

import { Step1 } from './step1'
import { Step2 } from './step2'

export interface FormDataStep1 {
  name: string
  email: string
}

export function SignUp() {
  const pagerViewRef = useRef<PagerView>(null)

  const [dataStep1, setDataStep1] = useState({} as FormDataStep1)
  const [messageLeave, setMessageLeave] = useState(false)

  const setPage = useCallback(
    (page: number) => {
      pagerViewRef.current?.setPage(page)
    },
    [pagerViewRef.current]
  )

  const handleSaveDataStep1 = useCallback((data: FormDataStep1) => {
    setDataStep1(data)
  }, [])

  function handleChangeMessageLeave() {
    setMessageLeave((state) => !state)
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
        onLayout={handleChangeMessageLeave}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <PagerView
            ref={pagerViewRef}
            style={{
              flex: 1,
            }}
            initialPage={0}
            scrollEnabled={false}
          >
            <Step1 {...{ messageLeave, setPage, handleSaveDataStep1 }} />
            <Step2 {...{ messageLeave, setPage, dataStep1 }} />
          </PagerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}
