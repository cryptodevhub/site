import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import Head from '../components/Head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="CryptoDevHub"
        description="The one-stop-shop for Blockchain- and Crypto developers. Learn Blockchain development, get a job in Crypto, grow your network."
        titleTemplate="%s - CryptoDevHub"
      />
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
