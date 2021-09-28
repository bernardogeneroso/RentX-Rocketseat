import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'
import GlobalStyle from '../styles/global'

import 'react-spring-modal/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
