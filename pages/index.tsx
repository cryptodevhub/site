import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home"
        description="The one-stop-shop for Blockchain- and Crypto developers. Learn Blockchain development, get a job in Crypto, grow your network."
      />
      <section>
        <h1>CryptoDevHub</h1>
        <h2>Learn Blockchain development, get a job in Crypto, grow your network</h2>
        <p>
          We&apos;re a community-driven effort to unite like-minded people interested in Blockchain-
          and Crypto Technologies.
        </p>
      </section>
    </>
  )
}

export default Home
