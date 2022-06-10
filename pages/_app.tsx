import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import React from 'react'

export const Language = React.createContext<string | undefined>('es');

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const {locale} = router
  return(
    <Language.Provider value={locale} >
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Language.Provider>)
}

export default MyApp
