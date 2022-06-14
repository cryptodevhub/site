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
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://cryptodevhub.io',
          site_name: 'CryptoDevHub'
        }}
        twitter={{
          handle: '@cryptodevhub',
          site: '@cryptodevhub',
          cardType: 'summary_large_image'
        }}
      />
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
