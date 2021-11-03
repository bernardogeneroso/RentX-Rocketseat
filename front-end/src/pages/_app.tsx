import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import AppProvider from '../hooks'
import light from '../styles/themes/light'
import GlobalStyle from '../styles/global'

import 'react-spring-modal/styles.css'
import 'react-calendar/dist/Calendar.css'
import '@reach/dialog/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleStart = (url: any) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <ThemeProvider theme={light}>
      <AppProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}
export default MyApp
